import cron from "node-cron";
import { deleteOldCarts } from "../utils/cartCleanupService.js";

// Schedule the cron job to run every 24 hours at midnight UTC
cron.schedule(
    "0 0 * * *",
    () => {
        console.log("🕒 Running cart cleanup job...");
        deleteOldCarts();
    },
    {
        scheduled: true,
        timezone: "UTC",
    }
);

export default cron;
