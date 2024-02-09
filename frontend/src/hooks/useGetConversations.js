import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  const getConversations = async (url) => {
    setLoading(false);

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data?.error) throw new Error(data?.error);
      setConversations(data);
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getConversations("/api/users");
  }, []);

  return { loading, conversations };
};
export default useGetConversations;
