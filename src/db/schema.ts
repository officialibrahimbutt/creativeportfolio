import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

/**
 * Inbound leads from the public contact form.
 * Structured so an internal admin (leads list, status, activity log)
 * can be layered on later without a migration rewrite.
 */
export const leads = pgTable("leads", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  business: text("business").notNull(),
  email: text("email").notNull(),
  niche: text("niche").notNull(),
  platform: text("platform").notNull(),
  website: text("website"),
  message: text("message"),
  status: text("status").notNull().default("new"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
