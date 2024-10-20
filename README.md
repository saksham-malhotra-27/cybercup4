![image](https://github.com/user-attachments/assets/f0f8ce04-2b46-43a2-9a1a-43f30530b490)

# AI-Driven Anomaly Detection in Cloud Infrastructure

This project focuses on developing an AI-powered system for real-time anomaly detection in cloud infrastructure, specifically targeting Express server logs. The system leverages deep learning to continuously monitor incoming server logs and identify unusual patterns or potential security threats such as DDoS attacks or brute force attempts. By automating log analysis, the model detects deviations from normal behavior and triggers immediate alerts, enabling faster response to cyberattacks. This approach improves cloud security by reducing the need for manual log inspection, enhancing detection accuracy, and minimizing response times.

## Problem: Cloud Security Vulnerabilities

1. **Rising Cyberattacks**  
   Cloud systems face an increasing number of cyberattacks, requiring more robust security measures.

2. **Real-Time Detection Gaps**  
   Traditional security solutions struggle with detecting threats in real-time, making them less effective against evolving threats.

3. **Manual Monitoring Inefficiency**  
   Manual log analysis is time-consuming, error-prone, and insufficient for handling large datasets typical in cloud environments.

## AI Solution: Automated Log Analysis

- **Data Source**  
  Express.js server logs are continuously monitored.
  
- **AI Model**  
  A Retrieval Augmented Generation (RAG) deep learning model, trained on historical log data, is used to detect attacks.
  
- **Alerts**  
  Automated alerts are generated for immediate responses to any detected threats.

## Workflow: Step-by-Step Process

1. **Data Collection and Training**  
   We collected approximately 1000 rows of attack data to train the deep learning model. 

2. **Log Collection**  
   Real-time logs are gathered from an Nginx server hosting an Express application on AWS EC2.

3. **Model Inference**  
   Logs are analyzed by the RAG deep learning model, which detects anomalies in real-time.

4. **Data Visualization**  
   The results of the AI model are displayed on a web interface for easy interpretation.

5. **Alerts**  
   Automated alerts are triggered when potential security threats are detected.

## AI Model Architecture

- **Model Type**  
  A deep learning model utilizing Retrieval Augmented Generation (RAG).

- **Training**  
  The model was trained on a diverse dataset curated by the team.

- **Key Features**  
  Detects different types of attacks and provides a severity assessment across three levels of abstraction.

- **Metrics**  
  Accuracy, recall, precision, and predictions are the key performance indicators used to evaluate the model.

## Real-Time Log Monitoring: Continuous Analysis

1. **Log Stream**  
   Continuous flow of server logs from the Express application.

2. **AI Processing**  
   Real-time analysis of the logs using the deep learning model.

3. **Anomaly Flags**  
   Immediate alerts are raised for any detected anomalies.

## Future Enhancements: Expanding Capabilities

1. **Wider Cloud Integration**  
   Adapt the system to support a variety of server types and cloud infrastructures.

2. **Advanced Threat Detection**  
   Improve detection of zero-day vulnerabilities and insider threats.

3. **Security System Integration**  
   Integrate the anomaly detection system with other security measures such as firewalls and Intrusion Detection Systems (IDS).

## Conclusion

Our AI-based anomaly detection system offers a reliable solution for real-time threat detection in cloud environments. By automating log analysis, the system reduces response times to potential attacks, safeguarding cloud servers from major security breaches. This approach eases the burden on security teams and enhances the overall security of cloud infrastructure.

