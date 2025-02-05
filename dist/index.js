"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const classification_1 = require("./utils/classification");
const funFact_1 = require("./utils/funFact");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/api/classify-number", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { number } = req.query;
    // Validate the number
    if (!number || isNaN(Number(number))) {
        res.status(400).json({
            number: "alphabet",
            error: true
        });
        return;
    }
    const num = parseInt(number, 10);
    // Classifying the number
    const classification = (0, classification_1.classifyNumber)(num);
    // Getting a Fun fact
    const funFact = yield (0, funFact_1.getFunFact)(num);
    // const response = {
    //     "number": num,
    //     "is_prime": classification.isPrime,
    //     "is_perfect": classification.isPerfect,
    //     "properties": classification.properties,
    //     "digit_sum": classification.digitSum,
    //     "fun_fact": funFact
    // }
    const response = {
        number: num,
        is_prime: classification.isPrime, // No quotes needed
        is_perfect: classification.isPerfect,
        properties: classification.properties,
        digit_sum: classification.digitSum,
        fun_fact: funFact
    };
    res.status(200).json(response);
})));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
