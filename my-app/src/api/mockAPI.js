export const fetchUser = async (userId) => {
  await new Promise(resolve => setTimeout(resolve, 1000)); // 1秒待機
  
  if (userId === '999') {
    throw new Error('User not found');
  }
  
  return {
    id: userId,
    name: `User ${userId}`,
    email: `user${userId}@example.com`
  };
};