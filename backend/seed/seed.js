#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const axios = require("axios");

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";

const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
};

const log = {
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  warn: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
};

async function createEntity(endpoint, data) {
  try {
    const response = await axios.post(`${STRAPI_URL}/api/${endpoint}`, {
      data,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to create ${endpoint}: ${error.response?.data?.error?.message || error.message}`,
    );
  }
}

async function seedPosts() {
  log.info("Seeding posts...");

  const postsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "posts-seed.json"), "utf-8"),
  );

  let created = 0;
  let failed = 0;

  for (const post of postsData) {
    try {
      await createEntity("posts", post);
      created++;
      log.success(`Created: ${post.title}`);
    } catch (error) {
      failed++;
      log.error(`Failed: ${post.title} - ${error.message}`);
    }
  }

  log.info(`Posts: ${created} created, ${failed} failed`);
  return { created, failed };
}

async function main() {
  console.log("\n🌱 Strapi Seed Script\n");

  log.info(`Connecting to: ${STRAPI_URL}`);
  log.info("Using public API permissions...");

  const stats = await seedPosts();

  console.log("\n📊 Summary:");
  console.log(`   Posts: ${stats.created} created, ${stats.failed} failed`);
  console.log("");

  if (stats.failed > 0) {
    log.warn("Some items failed to create. Check errors above.");
    process.exit(1);
  } else {
    log.success("All data seeded successfully!");
  }
}

main().catch((error) => {
  log.error(`Seed script failed: ${error.message}`);
  process.exit(1);
});
