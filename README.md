# ZenFlow Workspace (Code Name: Calm Comm)

![ZenFlow Banner](https://via.placeholder.com/1200x400?text=ZenFlow+Workspace+%7C+Emotional+Clarity+Over+Productivity)
> *Note: Project is currently in Phase 1 Development.*

## 🌊 Overview

**ZenFlow** is an AI-powered communication workspace that rethinks the relationship between email, calendar, and human connection. 

Unlike traditional tools that optimize for speed and volume, ZenFlow optimizes for **focus, emotional clarity, and relationship health**. It unifies communication into a single, calm daily flow where urgency is "earned," not forced.

**The Core Promise:** No red badges. No unread counts. Just a calm stream of work adapted to your mental capacity.

---

## ✨ Key Features

### 1. 🧠 The Grounding Greeting
On launch, users are met with a friendly AI agent—not a list of tasks.
- **Contextual Awareness:** "Today looks a little busy."
- **Agency:** Users choose their mode: *"Yes, let's plan"* (Full View) or *"No, keep it light"* (High-Filter Mode).

### 2. 🎠 The Fresh Email Carousel
An immersive, horizontal triage experience inspired by **IRU-style motion**.
- **Neutral Start:** All emails start grayscale.
- **Earned Color:** Emails only gain color when you prioritize them:
    - **Act (Red):** Urgent actions.
    - **Hold (Orange):** Pending items.
    - **Later (Yellow):** Low priority.

### 3. ❤️ Relationship Intelligence
ZenFlow understands that *who* sent the email matters more than *when* it arrived.
- **Circles:** Tag contacts as **Inner** (Family/Close Team), **Known**, or **Peripheral**.
- **Memory:** Add free-text context ("Met at the Design Expo") to contacts.
- **Nudges:** "You haven't spoken to [Name] in a month. Want to say hi?"

### 4. 📉 The Workload Bar
A 0-100% visual indicator of your day's density.
- If workload > 80%, the system automatically dampens noise, hiding promotional emails and low-priority tasks to protect your focus.

### 5. 🗓️ Supportive Timeline Calendar
A linear timeline view that supports your email priorities.
- Events mirror email colors.
- Post-meeting animations "burst" the bubble, giving a sense of closure.
- Automatic resurfacing of related emails after a meeting ends.

---

## 🎨 Design System

ZenFlow follows a strict **"Calm Computing"** aesthetic:

| Element | Specification |
| :--- | :--- |
| **Canvas** | Pure White (`#FFFFFF`) |
| **Typography** | High-contrast Black/Dark Gray (`#333333`) |
| **Accents** | Used strictly for meaning, never decoration. |
| **Motion** | Inertial, liquid transitions (Framer Motion). |

**Color Logic:**
- 🔴 **Red:** Immediate Action (Thin borders, subtle glow)
- 🟠 **Orange:** Hold / Pending
- 🟡 **Yellow:** Later / Low Intensity
- 🔵 **Blue:** AI Agent / System Status

---

## 🛠️ Technical Stack

- **Frontend:** React.js / Next.js
- **Animation:** Framer Motion (for the Carousel and liquid transitions)
- **Styling:** Tailwind CSS (Custom "Calm" Config)
- **State Management:** Zustand
- **Backend:** Node.js / Express
- **AI/LLM:** OpenAI API (GPT-4o mini) or Local LLaMA (for privacy-focused text parsing)
- **Database:** PostgreSQL (with Relational tagging for Contacts)

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/your-username/zenflow-workspace.git](https://github.com/your-username/zenflow-workspace.git)
   cd zenflow-workspace