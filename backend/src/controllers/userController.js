// userController.js (the controller to fetch user profile)
// const getUserProfile = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const user = await User.findById(userId).select('-password'); // Exclude password
    
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.json({
//       fullName: user.fullName,
//       profilePic: user.profilePic || '/default-avatar.png',
//       about: user.about || 'No bio available',
//       createdAt: user.createdAt,
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// export { getUserProfile };