import express from 'express';
import mongoose from 'mongoose';

import ContactUs from '../models/contactUs.js';

const router = express.Router();

export const getContactUs = async (req, res) => {
    const { page } = req.query;
    
    try {
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
    
        const total = await ContactUs.countDocuments({});
        const queries = await ContactUs.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: queries, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const createContactUs = async (req, res) => {
    const query = req.body.form;
    console.log(query);
    const newContactUsMessage = new ContactUs({ ...query,status: "unread", createdAt: new Date().toISOString() })

    try {
        await newContactUsMessage.save();

        res.status(201).json(newContactUsMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateContactUs = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No query with id: ${id}`);

    const updatedContactUs = { status, _id: id };

    await ContactUs.findByIdAndUpdate(id, updateContactUs, { new: true });

    res.json(updatedContactUs);
}

export const deleteContactUs = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No query with id: ${id}`);

    await ContactUs.findByIdAndRemove(id);

    res.json({ message: "Query deleted successfully." });
}

export default router;