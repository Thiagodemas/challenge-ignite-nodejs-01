import { parse } from "csv-parse";
import fs from "node:fs";

const csvPath = new URL('./tasks.csv', import.meta.url)