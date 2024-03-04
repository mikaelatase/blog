import React, { useState } from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation } from "react-router-dom";
import Button from '../ExtraAssets/Button';

const WriteBlog = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");

  return (
    <div>
    <div className="flex flex-wrap">
      <div className="flex flex-col justify-between w-2/3 h-96">
        <div className="mb-6">
          <label
            htmlFor="Title"
            className="block mb-2 text-lg font-bold font-large dark:text-white text-purple-500"
          >
            Title
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-purple-500 text-purple-500 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-purple-700 dark:border-purple-600 dark:placeholder-purple-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            placeholder="Title goes here..."
          />
        </div>
        <div className="h-full overflow-scroll border border-purple-500 rounded-md">
          <ReactQuill
            className="h-full w-full border-none"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>

      <div className="flex items-center justify-center w-1/3">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-2/3 h-2/3 border-2 border-purple-500 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-purple-700 hover:bg-gray-100 dark:border-purple-600 dark:hover:border-gray-500 dark:hover:bg-purple-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-purple-500 dark:text-purple-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-purple-500 dark:text-purple-400">
              <span className="font-semibold text-purple-400">
                Click to upload
              </span>{" "}
              or drag and drop
            </p>
            <p className="text-xs text-purple-500 dark:text-purple-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      </div>

      <div className='flex justify-center items-start mt-auto gap-20'>
        <Button text="Submit" />
        <Button text="Cancel" />
      </div>
    </div>
  );
}

export default WriteBlog;