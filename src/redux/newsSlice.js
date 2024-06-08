import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = '8a80c13e69b94e34811897dbe14646d3';

// Fetch news by category
export const fetchNews = createAsyncThunk('news/fetchNews', async (category = '') => {
    const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
    const response = await axios.get(API_URL);
    return { articles: response.data.articles, category };
});

// Fetch Headline news
export const fetchHeadline = createAsyncThunk('news/fetchHeadline', async () => {
    const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    const response = await axios.get(API_URL);
    return { articles: response.data.articles };
});

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        articles: [],
        headlineArticles: [],
        status: 'idle',
        headlineStatus: 'idle',
        error: null,
        category: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handling fetchCategoryNews
            .addCase(fetchNews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.articles = action.payload.articles;
                state.category = action.payload.category;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Handling fetchHeadline
            .addCase(fetchHeadline.pending, (state) => {
                state.headlineStatus = 'loading';
            })
            .addCase(fetchHeadline.fulfilled, (state, action) => {
                state.headlineStatus = 'succeeded';
                state.headlineArticles = action.payload.articles;
            })
            .addCase(fetchHeadline.rejected, (state, action) => {
                state.headlineStatus = 'failed';
                state.error = action.error.message;
            });
    }
});

export default newsSlice.reducer;
