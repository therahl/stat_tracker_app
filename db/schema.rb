# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151221043711) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "measurements", force: :cascade do |t|
    t.float   "weight"
    t.date    "date"
    t.float   "neck",      default: 0.0
    t.float   "bicep",     default: 0.0
    t.float   "chest",     default: 0.0
    t.float   "shoulders", default: 0.0
    t.float   "waist",     default: 0.0
    t.float   "hips",      default: 0.0
    t.float   "thigh",     default: 0.0
    t.float   "calf",      default: 0.0
    t.integer "user_id"
  end

  create_table "photos", force: :cascade do |t|
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
    t.date     "date"
    t.string   "angle"
    t.integer  "user_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  create_table "settings", force: :cascade do |t|
    t.string  "girth_units",  default: "metric"
    t.string  "weight_units", default: "metric"
    t.string  "height_units", default: "metric"
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "given_name"
    t.string   "family_name"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.date     "dob"
    t.string   "gender"
    t.string   "auth_token"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
