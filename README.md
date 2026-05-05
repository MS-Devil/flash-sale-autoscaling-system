# 🚀 Flash Sale Auto-Scaling System

## 📌 Overview

This project simulates a real-world flash sale system (like Flipkart/Amazon) that can handle sudden traffic spikes using Kubernetes auto-scaling and CI/CD automation.

---

## ❗ Problem

During flash sales, traffic spikes cause application crashes due to lack of scalability.

---

## ✅ Solution

This system automatically scales application pods using Kubernetes HPA and deploys updates using a CI/CD pipeline.

---

## 🧠 Architecture

GitHub → Jenkins → Docker → DockerHub → Kubernetes → Users

---

## ⚙️ Tech Stack

* Node.js (Application)
* Docker (Containerization)
* Kubernetes (Deployment & Auto Scaling)
* Jenkins (CI/CD)
* Prometheus + Grafana (Monitoring)

## 🏗️ Architecture Diagram

```
User
  ↓
Kubernetes Service (NodePort)
  ↓
Pods (Auto Scaling - HPA)
  ↓
Docker Image (Versioned: v1, v2, v3)
  ↓
DockerHub
  ↓
Jenkins CI/CD Pipeline
  ↓
GitHub Repository
```


---

## 🔥 Features

* CI/CD Pipeline (Build → Push → Deploy)
* Docker Image Versioning (v1, v2, v3...)
* Kubernetes Rolling Updates
* Auto Scaling (HPA)
* Monitoring Dashboard

---

## 🚀 Workflow

1. Code pushed to GitHub
2. Jenkins builds Docker image
3. Image pushed to DockerHub
4. Kubernetes deploys new version
5. Auto-scaling handles traffic spikes

---

## 📊 Future Improvements

* Ingress Controller
* HTTPS (SSL)
* Alerting system
* Multi-environment setup

---

## 👨‍💻 Author

Saksham Raj
