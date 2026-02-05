package com.example.customerfeedbacksystem.service;

import com.example.customerfeedbacksystem.entity.Feedback;
import java.util.List;

public interface FeedbackService {

    Feedback saveFeedback(Feedback feedback);

    List<Feedback> getAllFeedback();

    List<Feedback> getFeedbackByRating(int rating);
}

