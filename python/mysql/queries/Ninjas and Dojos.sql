SELECT * FROM users JOIN friendships ON users.id = friendships.user_id JOIN users AS user2 ON user2.id = friendships.friend_id WHERE user_id = 1;
