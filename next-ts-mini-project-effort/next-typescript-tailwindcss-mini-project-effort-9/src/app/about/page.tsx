"use client"
import React, { useEffect, useState } from "react";
import MainLayout from "@/layout/MainLayout";
import Banner from "../../components/Banner";
import { usePostsStore } from "@/stores/postsStore"; // Import the store

const About: React.FC = () => {
  const { posts, fetchPosts, deletePost, editPost } = usePostsStore(); // Get the store's state and actions
  const [editingPostId, setEditingPostId] = useState<number | null>(null); // State to track which post is being edited
  const [newTitle, setNewTitle] = useState<string>(""); // State for the new title when editing

  useEffect(() => {
    fetchPosts(); // Fetch posts when the component mounts
  }, [fetchPosts]);

  const handleEditClick = (id: number, title: string) => {
    setEditingPostId(id); // Set the post id being edited
    setNewTitle(title); // Set the current title as the initial value for editing
  };

  const handleSaveEdit = (id: number) => {
    if (newTitle.trim() === "") return; // Do nothing if title is empty
    editPost(id, newTitle); // Save the edited post
    setEditingPostId(null); // Close the edit mode
    setNewTitle(""); // Clear the input field
  };

  return (
    <>
      <MainLayout>
        <Banner>
          <h2>About</h2>
          <p>Labore laborum amet pariatur pariatur do.</p>
        </Banner>
        <div className="container mx-auto">
          <ul>
            {posts.map((post) => (
              <li key={post.id} className="mb-4">
                {editingPostId === post.id ? (
                  <div>
                    <input
                      type="text"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="border p-2 rounded"
                    />
                    <button
                      onClick={() => handleSaveEdit(post.id)}
                      className="ml-4 px-4 py-2 bg-green-500 text-white rounded"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div>
                    <span>{post.title}</span>
                    <button
                      onClick={() => handleEditClick(post.id, post.title)}
                      className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deletePost(post.id)}
                      className="ml-4 px-4 py-2 bg-red-500 text-white rounded"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </MainLayout>
    </>
  );
};

export default About;
