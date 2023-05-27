import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React from "react";

const Footer = ({ settings }) => {
  const numData=[
    {
      number:"15",
      title:"Years of experience"
    },
    {
      number:"30",
      title:"Certified guides"
    },
    {
      number:"3210",
      title:"Satisfied hikers"
    },
    {
      number:"60",
      title:"Years of best experience"
    },
   
  ]

  const footerData=[
    {
      svg: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.62 8.752C15.4158 8.752 15.2199 8.67088 15.0755 8.52647C14.9311 8.38207 14.85 8.18622 14.85 7.982C14.85 7.612 14.48 6.842 13.86 6.172C13.25 5.522 12.58 5.142 12.02 5.142C11.8158 5.142 11.6199 5.06088 11.4755 4.91647C11.3311 4.77207 11.25 4.57622 11.25 4.372C11.25 3.952 11.6 3.602 12.02 3.602C13.02 3.602 14.07 4.142 14.99 5.112C15.85 6.022 16.4 7.152 16.4 7.972C16.4 8.402 16.05 8.752 15.62 8.752ZM19.23 8.75C19.0258 8.75 18.8299 8.66888 18.6855 8.52447C18.5411 8.38007 18.46 8.18422 18.46 7.98C18.46 4.43 15.57 1.55 12.03 1.55C11.8258 1.55 11.6299 1.46888 11.4855 1.32447C11.3411 1.18007 11.26 0.984217 11.26 0.78C11.26 0.36 11.6 0 12.02 0C16.42 0 20 3.58 20 7.98C20 8.4 19.65 8.75 19.23 8.75ZM9.05 12.95L7.2 14.8C6.81 15.19 6.19 15.19 5.79 14.81C5.68 14.7 5.57 14.6 5.46 14.49C4.44877 13.472 3.5161 12.3789 2.67 11.22C1.85 10.08 1.19 8.94 0.71 7.81C0.24 6.67 0 5.58 0 4.54C0 3.86 0.12 3.21 0.36 2.61C0.6 2 0.98 1.44 1.51 0.94C2.15 0.31 2.85 0 3.59 0C3.87 0 4.15 0.0600001 4.4 0.18C4.66 0.3 4.89 0.48 5.07 0.74L7.39 4.01C7.57 4.26 7.7 4.49 7.79 4.71C7.88 4.92 7.93 5.13 7.93 5.32C7.93 5.56 7.86 5.8 7.72 6.03C7.59 6.26 7.4 6.5 7.16 6.74L6.4 7.53C6.29 7.64 6.24 7.77 6.24 7.93C6.24 8.01 6.25 8.08 6.27 8.16C6.3 8.24 6.33 8.3 6.35 8.36C6.53 8.69 6.84 9.12 7.28 9.64C7.73 10.16 8.21 10.69 8.73 11.22C8.83 11.32 8.94 11.42 9.04 11.52C9.44 11.91 9.45 12.55 9.05 12.95ZM19.97 16.33C19.9687 16.7074 19.8833 17.0798 19.72 17.42C19.55 17.78 19.33 18.12 19.04 18.44C18.55 18.98 18.01 19.37 17.4 19.62C17.39 19.62 17.38 19.63 17.37 19.63C16.78 19.87 16.14 20 15.45 20C14.43 20 13.34 19.76 12.19 19.27C11.04 18.78 9.89 18.12 8.75 17.29C8.36 17 7.97 16.71 7.6 16.4L10.87 13.13C11.15 13.34 11.4 13.5 11.61 13.61C11.66 13.63 11.72 13.66 11.79 13.69C11.87 13.72 11.95 13.73 12.04 13.73C12.21 13.73 12.34 13.67 12.45 13.56L13.21 12.81C13.46 12.56 13.7 12.37 13.93 12.25C14.16 12.11 14.39 12.04 14.64 12.04C14.83 12.04 15.03 12.08 15.25 12.17C15.47 12.26 15.7 12.39 15.95 12.56L19.26 14.91C19.52 15.09 19.7 15.3 19.81 15.55C19.91 15.8 19.97 16.05 19.97 16.33Z" fill="#FF3606"/>
        </svg>
      ),
    },
    {
      svg: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.62 8.752C15.4158 8.752 15.2199 8.67088 15.0755 8.52647C14.9311 8.38207 14.85 8.18622 14.85 7.982C14.85 7.612 14.48 6.842 13.86 6.172C13.25 5.522 12.58 5.142 12.02 5.142C11.8158 5.142 11.6199 5.06088 11.4755 4.91647C11.3311 4.77207 11.25 4.57622 11.25 4.372C11.25 3.952 11.6 3.602 12.02 3.602C13.02 3.602 14.07 4.142 14.99 5.112C15.85 6.022 16.4 7.152 16.4 7.972C16.4 8.402 16.05 8.752 15.62 8.752ZM19.23 8.75C19.0258 8.75 18.8299 8.66888 18.6855 8.52447C18.5411 8.38007 18.46 8.18422 18.46 7.98C18.46 4.43 15.57 1.55 12.03 1.55C11.8258 1.55 11.6299 1.46888 11.4855 1.32447C11.3411 1.18007 11.26 0.984217 11.26 0.78C11.26 0.36 11.6 0 12.02 0C16.42 0 20 3.58 20 7.98C20 8.4 19.65 8.75 19.23 8.75ZM9.05 12.95L7.2 14.8C6.81 15.19 6.19 15.19 5.79 14.81C5.68 14.7 5.57 14.6 5.46 14.49C4.44877 13.472 3.5161 12.3789 2.67 11.22C1.85 10.08 1.19 8.94 0.71 7.81C0.24 6.67 0 5.58 0 4.54C0 3.86 0.12 3.21 0.36 2.61C0.6 2 0.98 1.44 1.51 0.94C2.15 0.31 2.85 0 3.59 0C3.87 0 4.15 0.0600001 4.4 0.18C4.66 0.3 4.89 0.48 5.07 0.74L7.39 4.01C7.57 4.26 7.7 4.49 7.79 4.71C7.88 4.92 7.93 5.13 7.93 5.32C7.93 5.56 7.86 5.8 7.72 6.03C7.59 6.26 7.4 6.5 7.16 6.74L6.4 7.53C6.29 7.64 6.24 7.77 6.24 7.93C6.24 8.01 6.25 8.08 6.27 8.16C6.3 8.24 6.33 8.3 6.35 8.36C6.53 8.69 6.84 9.12 7.28 9.64C7.73 10.16 8.21 10.69 8.73 11.22C8.83 11.32 8.94 11.42 9.04 11.52C9.44 11.91 9.45 12.55 9.05 12.95ZM19.97 16.33C19.9687 16.7074 19.8833 17.0798 19.72 17.42C19.55 17.78 19.33 18.12 19.04 18.44C18.55 18.98 18.01 19.37 17.4 19.62C17.39 19.62 17.38 19.63 17.37 19.63C16.78 19.87 16.14 20 15.45 20C14.43 20 13.34 19.76 12.19 19.27C11.04 18.78 9.89 18.12 8.75 17.29C8.36 17 7.97 16.71 7.6 16.4L10.87 13.13C11.15 13.34 11.4 13.5 11.61 13.61C11.66 13.63 11.72 13.66 11.79 13.69C11.87 13.72 11.95 13.73 12.04 13.73C12.21 13.73 12.34 13.67 12.45 13.56L13.21 12.81C13.46 12.56 13.7 12.37 13.93 12.25C14.16 12.11 14.39 12.04 14.64 12.04C14.83 12.04 15.03 12.08 15.25 12.17C15.47 12.26 15.7 12.39 15.95 12.56L19.26 14.91C19.52 15.09 19.7 15.3 19.81 15.55C19.91 15.8 19.97 16.05 19.97 16.33Z" fill="#FF3606"/>
        </svg>
      ),
    },
    {
      svg: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.62 8.752C15.4158 8.752 15.2199 8.67088 15.0755 8.52647C14.9311 8.38207 14.85 8.18622 14.85 7.982C14.85 7.612 14.48 6.842 13.86 6.172C13.25 5.522 12.58 5.142 12.02 5.142C11.8158 5.142 11.6199 5.06088 11.4755 4.91647C11.3311 4.77207 11.25 4.57622 11.25 4.372C11.25 3.952 11.6 3.602 12.02 3.602C13.02 3.602 14.07 4.142 14.99 5.112C15.85 6.022 16.4 7.152 16.4 7.972C16.4 8.402 16.05 8.752 15.62 8.752ZM19.23 8.75C19.0258 8.75 18.8299 8.66888 18.6855 8.52447C18.5411 8.38007 18.46 8.18422 18.46 7.98C18.46 4.43 15.57 1.55 12.03 1.55C11.8258 1.55 11.6299 1.46888 11.4855 1.32447C11.3411 1.18007 11.26 0.984217 11.26 0.78C11.26 0.36 11.6 0 12.02 0C16.42 0 20 3.58 20 7.98C20 8.4 19.65 8.75 19.23 8.75ZM9.05 12.95L7.2 14.8C6.81 15.19 6.19 15.19 5.79 14.81C5.68 14.7 5.57 14.6 5.46 14.49C4.44877 13.472 3.5161 12.3789 2.67 11.22C1.85 10.08 1.19 8.94 0.71 7.81C0.24 6.67 0 5.58 0 4.54C0 3.86 0.12 3.21 0.36 2.61C0.6 2 0.98 1.44 1.51 0.94C2.15 0.31 2.85 0 3.59 0C3.87 0 4.15 0.0600001 4.4 0.18C4.66 0.3 4.89 0.48 5.07 0.74L7.39 4.01C7.57 4.26 7.7 4.49 7.79 4.71C7.88 4.92 7.93 5.13 7.93 5.32C7.93 5.56 7.86 5.8 7.72 6.03C7.59 6.26 7.4 6.5 7.16 6.74L6.4 7.53C6.29 7.64 6.24 7.77 6.24 7.93C6.24 8.01 6.25 8.08 6.27 8.16C6.3 8.24 6.33 8.3 6.35 8.36C6.53 8.69 6.84 9.12 7.28 9.64C7.73 10.16 8.21 10.69 8.73 11.22C8.83 11.32 8.94 11.42 9.04 11.52C9.44 11.91 9.45 12.55 9.05 12.95ZM19.97 16.33C19.9687 16.7074 19.8833 17.0798 19.72 17.42C19.55 17.78 19.33 18.12 19.04 18.44C18.55 18.98 18.01 19.37 17.4 19.62C17.39 19.62 17.38 19.63 17.37 19.63C16.78 19.87 16.14 20 15.45 20C14.43 20 13.34 19.76 12.19 19.27C11.04 18.78 9.89 18.12 8.75 17.29C8.36 17 7.97 16.71 7.6 16.4L10.87 13.13C11.15 13.34 11.4 13.5 11.61 13.61C11.66 13.63 11.72 13.66 11.79 13.69C11.87 13.72 11.95 13.73 12.04 13.73C12.21 13.73 12.34 13.67 12.45 13.56L13.21 12.81C13.46 12.56 13.7 12.37 13.93 12.25C14.16 12.11 14.39 12.04 14.64 12.04C14.83 12.04 15.03 12.08 15.25 12.17C15.47 12.26 15.7 12.39 15.95 12.56L19.26 14.91C19.52 15.09 19.7 15.3 19.81 15.55C19.91 15.8 19.97 16.05 19.97 16.33Z" fill="#FF3606"/>
        </svg>
      ),
    },
    {
      svg: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.62 8.752C15.4158 8.752 15.2199 8.67088 15.0755 8.52647C14.9311 8.38207 14.85 8.18622 14.85 7.982C14.85 7.612 14.48 6.842 13.86 6.172C13.25 5.522 12.58 5.142 12.02 5.142C11.8158 5.142 11.6199 5.06088 11.4755 4.91647C11.3311 4.77207 11.25 4.57622 11.25 4.372C11.25 3.952 11.6 3.602 12.02 3.602C13.02 3.602 14.07 4.142 14.99 5.112C15.85 6.022 16.4 7.152 16.4 7.972C16.4 8.402 16.05 8.752 15.62 8.752ZM19.23 8.75C19.0258 8.75 18.8299 8.66888 18.6855 8.52447C18.5411 8.38007 18.46 8.18422 18.46 7.98C18.46 4.43 15.57 1.55 12.03 1.55C11.8258 1.55 11.6299 1.46888 11.4855 1.32447C11.3411 1.18007 11.26 0.984217 11.26 0.78C11.26 0.36 11.6 0 12.02 0C16.42 0 20 3.58 20 7.98C20 8.4 19.65 8.75 19.23 8.75ZM9.05 12.95L7.2 14.8C6.81 15.19 6.19 15.19 5.79 14.81C5.68 14.7 5.57 14.6 5.46 14.49C4.44877 13.472 3.5161 12.3789 2.67 11.22C1.85 10.08 1.19 8.94 0.71 7.81C0.24 6.67 0 5.58 0 4.54C0 3.86 0.12 3.21 0.36 2.61C0.6 2 0.98 1.44 1.51 0.94C2.15 0.31 2.85 0 3.59 0C3.87 0 4.15 0.0600001 4.4 0.18C4.66 0.3 4.89 0.48 5.07 0.74L7.39 4.01C7.57 4.26 7.7 4.49 7.79 4.71C7.88 4.92 7.93 5.13 7.93 5.32C7.93 5.56 7.86 5.8 7.72 6.03C7.59 6.26 7.4 6.5 7.16 6.74L6.4 7.53C6.29 7.64 6.24 7.77 6.24 7.93C6.24 8.01 6.25 8.08 6.27 8.16C6.3 8.24 6.33 8.3 6.35 8.36C6.53 8.69 6.84 9.12 7.28 9.64C7.73 10.16 8.21 10.69 8.73 11.22C8.83 11.32 8.94 11.42 9.04 11.52C9.44 11.91 9.45 12.55 9.05 12.95ZM19.97 16.33C19.9687 16.7074 19.8833 17.0798 19.72 17.42C19.55 17.78 19.33 18.12 19.04 18.44C18.55 18.98 18.01 19.37 17.4 19.62C17.39 19.62 17.38 19.63 17.37 19.63C16.78 19.87 16.14 20 15.45 20C14.43 20 13.34 19.76 12.19 19.27C11.04 18.78 9.89 18.12 8.75 17.29C8.36 17 7.97 16.71 7.6 16.4L10.87 13.13C11.15 13.34 11.4 13.5 11.61 13.61C11.66 13.63 11.72 13.66 11.79 13.69C11.87 13.72 11.95 13.73 12.04 13.73C12.21 13.73 12.34 13.67 12.45 13.56L13.21 12.81C13.46 12.56 13.7 12.37 13.93 12.25C14.16 12.11 14.39 12.04 14.64 12.04C14.83 12.04 15.03 12.08 15.25 12.17C15.47 12.26 15.7 12.39 15.95 12.56L19.26 14.91C19.52 15.09 19.7 15.3 19.81 15.55C19.91 15.8 19.97 16.05 19.97 16.33Z" fill="#FF3606"/>
        </svg>
      ),
    }
    ,
    {
      svg: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.62 8.752C15.4158 8.752 15.2199 8.67088 15.0755 8.52647C14.9311 8.38207 14.85 8.18622 14.85 7.982C14.85 7.612 14.48 6.842 13.86 6.172C13.25 5.522 12.58 5.142 12.02 5.142C11.8158 5.142 11.6199 5.06088 11.4755 4.91647C11.3311 4.77207 11.25 4.57622 11.25 4.372C11.25 3.952 11.6 3.602 12.02 3.602C13.02 3.602 14.07 4.142 14.99 5.112C15.85 6.022 16.4 7.152 16.4 7.972C16.4 8.402 16.05 8.752 15.62 8.752ZM19.23 8.75C19.0258 8.75 18.8299 8.66888 18.6855 8.52447C18.5411 8.38007 18.46 8.18422 18.46 7.98C18.46 4.43 15.57 1.55 12.03 1.55C11.8258 1.55 11.6299 1.46888 11.4855 1.32447C11.3411 1.18007 11.26 0.984217 11.26 0.78C11.26 0.36 11.6 0 12.02 0C16.42 0 20 3.58 20 7.98C20 8.4 19.65 8.75 19.23 8.75ZM9.05 12.95L7.2 14.8C6.81 15.19 6.19 15.19 5.79 14.81C5.68 14.7 5.57 14.6 5.46 14.49C4.44877 13.472 3.5161 12.3789 2.67 11.22C1.85 10.08 1.19 8.94 0.71 7.81C0.24 6.67 0 5.58 0 4.54C0 3.86 0.12 3.21 0.36 2.61C0.6 2 0.98 1.44 1.51 0.94C2.15 0.31 2.85 0 3.59 0C3.87 0 4.15 0.0600001 4.4 0.18C4.66 0.3 4.89 0.48 5.07 0.74L7.39 4.01C7.57 4.26 7.7 4.49 7.79 4.71C7.88 4.92 7.93 5.13 7.93 5.32C7.93 5.56 7.86 5.8 7.72 6.03C7.59 6.26 7.4 6.5 7.16 6.74L6.4 7.53C6.29 7.64 6.24 7.77 6.24 7.93C6.24 8.01 6.25 8.08 6.27 8.16C6.3 8.24 6.33 8.3 6.35 8.36C6.53 8.69 6.84 9.12 7.28 9.64C7.73 10.16 8.21 10.69 8.73 11.22C8.83 11.32 8.94 11.42 9.04 11.52C9.44 11.91 9.45 12.55 9.05 12.95ZM19.97 16.33C19.9687 16.7074 19.8833 17.0798 19.72 17.42C19.55 17.78 19.33 18.12 19.04 18.44C18.55 18.98 18.01 19.37 17.4 19.62C17.39 19.62 17.38 19.63 17.37 19.63C16.78 19.87 16.14 20 15.45 20C14.43 20 13.34 19.76 12.19 19.27C11.04 18.78 9.89 18.12 8.75 17.29C8.36 17 7.97 16.71 7.6 16.4L10.87 13.13C11.15 13.34 11.4 13.5 11.61 13.61C11.66 13.63 11.72 13.66 11.79 13.69C11.87 13.72 11.95 13.73 12.04 13.73C12.21 13.73 12.34 13.67 12.45 13.56L13.21 12.81C13.46 12.56 13.7 12.37 13.93 12.25C14.16 12.11 14.39 12.04 14.64 12.04C14.83 12.04 15.03 12.08 15.25 12.17C15.47 12.26 15.7 12.39 15.95 12.56L19.26 14.91C19.52 15.09 19.7 15.3 19.81 15.55C19.91 15.8 19.97 16.05 19.97 16.33Z" fill="#FF3606"/>
        </svg>
      ),
    },
    {
      svg: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.62 8.752C15.4158 8.752 15.2199 8.67088 15.0755 8.52647C14.9311 8.38207 14.85 8.18622 14.85 7.982C14.85 7.612 14.48 6.842 13.86 6.172C13.25 5.522 12.58 5.142 12.02 5.142C11.8158 5.142 11.6199 5.06088 11.4755 4.91647C11.3311 4.77207 11.25 4.57622 11.25 4.372C11.25 3.952 11.6 3.602 12.02 3.602C13.02 3.602 14.07 4.142 14.99 5.112C15.85 6.022 16.4 7.152 16.4 7.972C16.4 8.402 16.05 8.752 15.62 8.752ZM19.23 8.75C19.0258 8.75 18.8299 8.66888 18.6855 8.52447C18.5411 8.38007 18.46 8.18422 18.46 7.98C18.46 4.43 15.57 1.55 12.03 1.55C11.8258 1.55 11.6299 1.46888 11.4855 1.32447C11.3411 1.18007 11.26 0.984217 11.26 0.78C11.26 0.36 11.6 0 12.02 0C16.42 0 20 3.58 20 7.98C20 8.4 19.65 8.75 19.23 8.75ZM9.05 12.95L7.2 14.8C6.81 15.19 6.19 15.19 5.79 14.81C5.68 14.7 5.57 14.6 5.46 14.49C4.44877 13.472 3.5161 12.3789 2.67 11.22C1.85 10.08 1.19 8.94 0.71 7.81C0.24 6.67 0 5.58 0 4.54C0 3.86 0.12 3.21 0.36 2.61C0.6 2 0.98 1.44 1.51 0.94C2.15 0.31 2.85 0 3.59 0C3.87 0 4.15 0.0600001 4.4 0.18C4.66 0.3 4.89 0.48 5.07 0.74L7.39 4.01C7.57 4.26 7.7 4.49 7.79 4.71C7.88 4.92 7.93 5.13 7.93 5.32C7.93 5.56 7.86 5.8 7.72 6.03C7.59 6.26 7.4 6.5 7.16 6.74L6.4 7.53C6.29 7.64 6.24 7.77 6.24 7.93C6.24 8.01 6.25 8.08 6.27 8.16C6.3 8.24 6.33 8.3 6.35 8.36C6.53 8.69 6.84 9.12 7.28 9.64C7.73 10.16 8.21 10.69 8.73 11.22C8.83 11.32 8.94 11.42 9.04 11.52C9.44 11.91 9.45 12.55 9.05 12.95ZM19.97 16.33C19.9687 16.7074 19.8833 17.0798 19.72 17.42C19.55 17.78 19.33 18.12 19.04 18.44C18.55 18.98 18.01 19.37 17.4 19.62C17.39 19.62 17.38 19.63 17.37 19.63C16.78 19.87 16.14 20 15.45 20C14.43 20 13.34 19.76 12.19 19.27C11.04 18.78 9.89 18.12 8.75 17.29C8.36 17 7.97 16.71 7.6 16.4L10.87 13.13C11.15 13.34 11.4 13.5 11.61 13.61C11.66 13.63 11.72 13.66 11.79 13.69C11.87 13.72 11.95 13.73 12.04 13.73C12.21 13.73 12.34 13.67 12.45 13.56L13.21 12.81C13.46 12.56 13.7 12.37 13.93 12.25C14.16 12.11 14.39 12.04 14.64 12.04C14.83 12.04 15.03 12.08 15.25 12.17C15.47 12.26 15.7 12.39 15.95 12.56L19.26 14.91C19.52 15.09 19.7 15.3 19.81 15.55C19.91 15.8 19.97 16.05 19.97 16.33Z" fill="#FF3606"/>
        </svg>
      ),
    }
  ]
  return (
    <>
    {/* main section */}
     <Flex flexDirection="column" height="100%" width="100%">
      {/* number section */}
<Flex justifyContent="center" gap="100px" alignItems="center" width="100%" my="60px">
  {numData.map((el,id)=>{
    return(
      <>
      <Flex   alignItems="center" flexDirection="column">
      <Flex key={id} gap="9px"  alignItems="center">
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28 0C12.6 0 0 12.6 0 28C0 43.4 12.6 56 28 56C43.4 56 56 43.4 56 28C56 12.6 43.4 0 28 0ZM22.4 42L8.4 28L12.348 24.052L22.4 34.076L43.652 12.824L47.6 16.8L22.4 42Z" fill="#FF461D"/>
</svg>
<Text color="black" fontSize="60px" fontFamily="Anton" fontWeight="400" lineHeight="92px" >{el.number}</Text>
<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.2143 14.7857H14.2857V23.7143C14.2857 24.1879 14.0976 24.6421 13.7627 24.977C13.4278 25.3119 12.9736 25.5 12.5 25.5C12.0264 25.5 11.5722 25.3119 11.2373 24.977C10.9024 24.6421 10.7143 24.1879 10.7143 23.7143V14.7857H1.78571C1.31211 14.7857 0.85791 14.5976 0.523024 14.2627C0.188138 13.9278 0 13.4736 0 13C0 12.5264 0.188138 12.0722 0.523024 11.7373C0.85791 11.4024 1.31211 11.2143 1.78571 11.2143H10.7143V2.28571C10.7143 1.81211 10.9024 1.35791 11.2373 1.02302C11.5722 0.688137 12.0264 0.5 12.5 0.5C12.9736 0.5 13.4278 0.688137 13.7627 1.02302C14.0976 1.35791 14.2857 1.81211 14.2857 2.28571V11.2143H23.2143C23.6879 11.2143 24.1421 11.4024 24.477 11.7373C24.8119 12.0722 25 12.5264 25 13C25 13.4736 24.8119 13.9278 24.477 14.2627C24.1421 14.5976 23.6879 14.7857 23.2143 14.7857Z" fill="#FF461D"/>
</svg>
      </Flex>
<Text >{el.title}</Text>

      </Flex>
     


      </>
    )
  })}

</Flex>

{/* img section */}
<Box height="422px" width="100%">
<Box 
height="100%"
width="100%"
bgRepeat="no-repeat"
bgImage="url('/images/footernew.png')"
bgSize="cover"
></Box>
</Box>


{/* footer section */}
<Flex>
  {/* left container */}
  <Flex height="100%"  width="50%">
    <Image src="/images/logo.png"></Image>
  </Flex>

  {/* right section */}
  <Flex height="100%"  width="50%">
    {footerData.map((el,id)=>{
      return(<>
      <Flex key={id}>
        {el.svg}
<Text>1234567892</Text>

      </Flex>
      
      </>)
    })}
  
  </Flex>
 
</Flex>
     </Flex>
    </>
  );
};
export default Footer;
