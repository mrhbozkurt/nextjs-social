"use client";
import Loader from '../components/Loader';
import { useEffect, useState } from "react";
import PostCard from '../components/cards/PostCard';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [feedPost, setFeedPost] = useState([]);
  const getFeedPost = async () => {
    const response = await fetch('/api/post')
    const data = await response.json()
    setFeedPost(data)
    setLoading(false)
  }

  useEffect(() => {
    getFeedPost()
  }, [])

  return loading ? <Loader /> : (
    <div className='flex flex-col gap-10'>
      {feedPost.map((post) => (
        <PostCard />
      ))}
    </div>
  )
}

export default Home;