# Chatbot Application

This is a simple chatbot application built using Node.js and Express for the backend, and the [facebook/blenderbot-400M-distill](https://huggingface.co/facebook/blenderbot-400M-distill) model from Hugging Face for generating chatbot responses.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Model Description](#model-description)


## Introduction

This project demonstrates how to build a basic chatbot interface using Node.js and Express. The chatbot utilizes the `facebook/blenderbot-400M-distill` model from Hugging Face to generate responses to user inputs. The frontend allows users to interact with the chatbot, with user messages displayed on the right and chatbot responses on the left, similar to typical chat applications.

## Features

- **Express Server**: Handles API requests and serves the static frontend.
- **Hugging Face Integration**: Utilizes the `facebook/blenderbot-400M-distill` model for generating chatbot responses.
- **Responsive Chat Interface**: User messages are aligned to the right, and chatbot responses are aligned to the left.
- **Automatic Scroll**: The chat interface automatically scrolls down as new messages are added.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- NPM (v6 or higher)

### Steps

1. Clone the repository:

   ```bash
   git clone git@github.com:Danikim01/Chat-bot.git
   cd chatbot-app
   ```
2. Install the required dependencies:

    ```bash
   npm install
   ```
3. Create a .env file in the root directory and add your Hugging Face API key:

    ```bash
   API_KEY=your_huggingface_api_key_here
   ```

4. Start the server:
    ```bash
   npm start
   ```

## Usage

1. Open your web browser and navigate to http://localhost:8080
2. Type a message in the input box and click "Send" to interact with the chatbot.
3. Your messages will appear on the right side of the chat window, while the chatbot's responses will appear on the left.

## Model Description

Model Description
The chatbot uses the facebook/blenderbot-400M-distill model, which is a distilled version of the original BlenderBot model. This model is part of a family of open-domain chatbots developed by Facebook AI Research.

### Paper: "Recipes for building an open-domain chatbot"
Abstract: Building open-domain chatbots is a challenging area for machine learning research. Prior work has shown that scaling neural models in the number of parameters and the size of the data they are trained on improves results. This research highlights the importance of additional factors for a high-performing chatbot, including the ability to provide engaging talking points, ask and answer questions, and display knowledge, empathy, and personality. The paper discusses the construction of these models and presents human evaluations showing superior performance in multi-turn dialogue.

Model Variants: The original work explored models with 90M, 2.7B, and 9.4B parameters. The facebook/blenderbot-400M-distill model used here is a distilled version aimed at providing a good balance between performance and resource requirements.

For more details, refer to the model page on Hugging Face.