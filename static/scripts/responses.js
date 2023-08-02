function getBotResponse(input) {
    if (input === "hello" || input === "hi" || input == "hey" || input == "heya") {
        const greetings = ["Hello there!", "Hi!", "Hey, how's it going?", "Hey there, nice to see you!", "Hiya! What can I do for you?"];
        return getRandomResponse(greetings);
    } else if (input === "goodbye" || input === "bye") {
        const farewells = ["Talk to you later!", "Goodbye!", "Farewell!", "Have a great day!", "Until next time!"];
        return getRandomResponse(howabouts);
    } else if (input === "What are you doing?" || input === "Whatsup?" || input == "How's it going?" || input == "What's going on?") {
        const farewells = ["Nothing much.How about you?", "All good here! What about you?", "Just the usual. You?", "Same old, same old."];
        return getRandomResponse(howabouts);
    } else if (input === "how are you?" || input === "how are you doing?") {
        const emotions = ["I'm doing well, thank you!", "Feeling great today!", "As a bot, I don't have feelings, but I'm here to assist you!", "I'm always ready to help!"];
        return getRandomResponse(emotions);
    } else if (input === "what's your name?" || input === "who are you?") {
        const intros = ["I am a Chatbot. Nice to meet you!", "I go by the name Chatbot. How can I assist you today?", "I'm your friendly neighborhood Chatbot!", "I'm the Chatbot here to help you out."];
        return getRandomResponse(intros);
    } else if (input === "what is the weather like today?") {
        return "I'm sorry, I am not able to provide real-time information like weather. Please check a weather website or app for accurate weather updates!";
    } else if (input === "tell me a joke") {
        const jokes = ["Why don't scientists trust atoms? Because they make up everything!", "Why did the scarecrow win an award? Because he was outstanding in his field!", "Why did the bicycle fall over? Because it was two-tired!"];
        return getRandomResponse(jokes);
    } else if (input === "how can I contact support?" || input === "help") {
        return "For support, you can email us at support@example.com or call our helpline at +1-800-123-4567.";
    }else if (input == "Great!!" || input === "Go Ahead!!") {
        const appreciations = ["You too dear :)","Yup,Keep going!","Hurray!!!"]
        return getRandomResponse(appreciations) ;
    } else {
        const fallbacks = ["I'm sorry, I'm not quite sure what you're asking. Could you please rephrase your question?", "I'm still novice and may not have the answer right now. Can you try asking something else?", "maI might need more information to understand your question better.", "I'm sorry, I didn't quite catch that. Could you please try again?"];
        return getRandomResponse(fallbacks);
    }
}

function getRandomResponse(responses) {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}
