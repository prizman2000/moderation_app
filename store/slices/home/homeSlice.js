import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import React from "react";
import api from "../../../api";

export const fetchPosts = createAsyncThunk(
    'posts',
    async () =>
        api({
            url: '/posts',
            method: 'get',
        }).then((res) => res.data).catch((error) => error)
)

export const postPostsResults = createAsyncThunk(
    'posts/post',
    async (data) =>
        api({
            url: '/answers',
            data: data,
            method: 'post',
        }).then((res) => res.data).catch((error) => error)
)

const initialState = {
    enter: false,
    activePost: 0,
    posts: {
        data: {},
        loading: true,
        error: {}
    },
    checkedPosts: [],
    toSave: false,
    end: false
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        enterInSystem: (state) => {
            state.enter = true;
        },
        nextPost: (state) => {
            ++state.activePost;
            if ((state.activePost%10 === 0 || state.posts.data.length === state.activePost) && state.activePost !== 0) {
                state.toSave = true;
            }
            if (state.posts.data.length === state.activePost) {
                state.end = true;
            }
        },
        addCheckedPost: (state, action) => {
            state.checkedPosts.push(action.payload);
        },
        saveChanges: (state) => {
            state.toSave = false
        }
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.posts = {
                data: {},
                loading: true,
                error: {}
            }
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts = {
                data: action.payload,
                loading: false,
                error: {}
            }
        },
        [fetchPosts.rejected]: (state, action) => {
            state.posts = {
                data: {},
                loading: false,
                error: action.payload
            }
        },
        [postPostsResults.pending]: (state) => {
            state.checkedPosts = [];
        }
    }
});

export const {
    enterInSystem,
    nextPost,
    addCheckedPost,
    saveChanges
} = homeSlice.actions;

export default homeSlice.reducer;