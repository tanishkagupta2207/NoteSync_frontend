import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: 'rgba(114, 113, 113, 0.15)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    marginTop: '120px',
    color: 'rgb(0, 0, 0)',
  };

  const headingStyle = {
    color: '#291a40',
    marginBottom: '20px',
  };

  const textStyle = {
    color: 'rgb(0, 0, 0)',
    lineHeight: '1.6',
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '20px',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About NoteSync 📓</h1>
      <p style={textStyle}>
        Welcome to NoteSync! 🎉 NoteSync is a powerful note-taking application designed to help you stay
        organized and productive. Whether you're a student, professional, or
        just someone who loves to take notes, NoteSync has all the features you
        need.
      </p>
      <h2 style={headingStyle}>Features 🌟</h2>
      <ul style={{ ...textStyle, ...listStyle }}>
        <li>Easy-to-use interface 🖥️</li>
        <li>Secure and reliable 🔒</li>
        <li>Sync notes across all your devices 📱💻</li>
        <li>Organize notes with tags and categories 🏷️</li>
        <li>Search and filter notes quickly 🔍</li>
      </ul>
      <h2 style={headingStyle}>Our Mission 🎯</h2>
      <p style={textStyle}>
        At NoteSync, our mission is to provide a seamless and efficient note-taking experience for everyone. 
        We believe that taking notes should be simple, intuitive, and accessible from anywhere. 
        Our team is dedicated to continuously improving the app and adding new features to meet the needs of our users.
      </p>
    </div>
  );
}

export default About;