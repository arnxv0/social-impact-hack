// Type Definitions
export interface UserProfile {
  user_id: string;
  name: string;
  phone: string;
  dob: string;
  created_at: string;
  last_login: string;
}

export interface CallTranscript {
  transcript_id: string;
  call_date: string;
  duration_seconds: number;
  sentiment_score: number;
  transcript_text: string;
}

export interface IntakeResponse {
  response_id: string;
  question_text: string;
  answer: string | null;
  answered_at: string;
  skipped: boolean;
}

export interface ServiceContact {
  contact_id: string;
  service_name: string;
  contact_type: "call_made" | "form_submitted" | "referral";
  status: "completed" | "pending" | "failed";
  contact_date: string;
  notes: string;
  next_steps: string;
  stages?: {
    stage_name: string;
    status: "completed" | "current" | "upcoming";
    date?: string;
    description: string;
  }[];
}

export interface EligibleBenefit {
  benefit_id: string;
  benefit_name: string;
  category:
    | "housing"
    | "food"
    | "education"
    | "medical"
    | "employment"
    | "legal"
    | "mental_health";
  eligibility_reason: string;
  application_status:
    | "not_started"
    | "application_submitted"
    | "approved"
    | "in_review";
  matched_at: string;
}

// Mock Data
export const mockUserProfile: UserProfile = {
  user_id: "550e8400-e29b-41d4-a716-446655440000",
  name: "Jordan Smith",
  phone: "408-555-0123",
  dob: "2006-03-15",
  created_at: "2025-10-01T14:30:00",
  last_login: "2025-11-08T11:00:00",
};

export const mockCallTranscripts: CallTranscript[] = [
  {
    transcript_id: "1",
    call_date: "2025-11-05T10:15:00",
    duration_seconds: 420,
    sentiment_score: 0.65,
    transcript_text: `Agent: Hi Jordan, this is the Youth Services Assistant. Thanks for reaching out today. I'm here to help connect you with services that can support you. Before we start, I want you to know that everything we discuss is confidential, and you can skip any question you're not comfortable answering. How are you feeling today?

Jordan: I'm okay, I guess. Just trying to figure out what to do next.

Agent: That's completely understandable. You're taking an important step by reaching out. Can you tell me a bit about your current living situation?

Jordan: I've been staying in my car for about two weeks now. It's not ideal, but I'm managing.

Agent: Thank you for sharing that with me, Jordan. I know that's not easy. You're doing the best you can with a difficult situation. Let me see what emergency shelter options might be available for you. Have you stayed in a shelter before?

Jordan: No, I haven't. I'm a bit nervous about it.

Agent: That's a very normal feeling. Many young people feel that way at first. The shelters we work with are specifically designed for youth and focus on creating a safe, respectful environment. Would you like to hear about some options?

Jordan: Yeah, that would be helpful.`,
  },
  {
    transcript_id: "2",
    call_date: "2025-11-06T14:30:00",
    duration_seconds: 540,
    sentiment_score: 0.78,
    transcript_text: `Agent: Hi Jordan, it's great to hear from you again. I wanted to follow up on the shelter application we submitted yesterday. How are things going?

Jordan: Actually, I got a call from Safe Place for Youth this morning! They have a bed available starting tomorrow.

Agent: That's wonderful news! I'm so glad to hear that. How are you feeling about it?

Jordan: Honestly, really relieved. I didn't sleep well in my car last night. It's getting colder.

Agent: I can imagine. Having a safe, warm place to stay will make such a difference. Do you have any questions about what to expect when you check in tomorrow?

Jordan: Yeah, what should I bring with me?

Agent: Good question. You'll want to bring any ID you have, your phone and charger, and any personal items you need. They'll provide bedding and meals. Also, they have laundry facilities there. Is there anything else that would be helpful to know?

Jordan: What about during the day? Can I come and go?

Agent: Yes, absolutely. They have flexible rules - you're not locked in. They actually have a lot of daytime programs too, like job training and educational support. You can participate in those if you're interested, but there's no pressure.

Jordan: That sounds pretty good actually.

Agent: I'm glad. You're doing great, Jordan. I also wanted to talk about some other benefits you might qualify for. Do you have a few more minutes?

Jordan: Sure, yeah.`,
  },
  {
    transcript_id: "3",
    call_date: "2025-11-08T09:00:00",
    duration_seconds: 360,
    sentiment_score: 0.82,
    transcript_text: `Agent: Good morning, Jordan! How was your first night at Safe Place for Youth?

Jordan: It was actually really good. Everyone was nice, and I got the best sleep I've had in weeks.

Agent: I'm so happy to hear that! That's exactly what we were hoping for. Today I wanted to check in about some of the benefit applications we discussed. Have you had a chance to think about any of them?

Jordan: Yeah, I'm definitely interested in the CalFresh food benefits and maybe the education stuff.

Agent: Perfect! Those are great choices. Let me help you get started with the CalFresh application today. It can provide you with money for groceries each month. And for education, there's a program specifically for youth that can help you finish high school or get your GED, plus potentially start college courses.

Jordan: That would be amazing. I had to leave school when things got complicated at home.

Agent: I understand. Many young people in similar situations have been able to continue their education through these programs. You're not behind - you're exactly where you need to be, taking steps forward. Should we start with the CalFresh application?

Jordan: Yes, let's do it.

Agent: Great! This will take about 15 minutes. I'm going to ask you some questions, and remember - if there's anything you're not comfortable answering, just let me know.`,
  },
];

export const mockIntakeResponses: IntakeResponse[] = [
  {
    response_id: "1",
    question_text: "Where are you currently staying?",
    answer: "Living in my car",
    answered_at: "2025-11-05T10:18:00",
    skipped: false,
  },
  {
    response_id: "2",
    question_text: "Do you have any urgent medical needs?",
    answer: null,
    answered_at: "2025-11-05T10:23:00",
    skipped: true,
  },
  {
    response_id: "3",
    question_text: "Are you currently enrolled in school?",
    answer: "No, I had to stop going about 3 months ago",
    answered_at: "2025-11-05T10:19:00",
    skipped: false,
  },
  {
    response_id: "4",
    question_text: "Do you have a reliable way to get food each day?",
    answer: "Not really, it depends on if I can find work or get help",
    answered_at: "2025-11-05T10:20:00",
    skipped: false,
  },
  {
    response_id: "5",
    question_text: "Have you been a victim of violence or abuse?",
    answer: null,
    answered_at: "2025-11-05T10:24:00",
    skipped: true,
  },
  {
    response_id: "6",
    question_text: "Are you currently working or looking for work?",
    answer: "Looking for work, but it's hard without a stable address",
    answered_at: "2025-11-05T10:21:00",
    skipped: false,
  },
  {
    response_id: "7",
    question_text: "Do you have health insurance?",
    answer: "No",
    answered_at: "2025-11-05T10:22:00",
    skipped: false,
  },
  {
    response_id: "8",
    question_text: "What are your most immediate needs right now?",
    answer: "A safe place to sleep and regular meals",
    answered_at: "2025-11-05T10:23:00",
    skipped: false,
  },
  {
    response_id: "9",
    question_text: "Do you have any support from family or friends?",
    answer: null,
    answered_at: "2025-11-05T10:25:00",
    skipped: true,
  },
  {
    response_id: "10",
    question_text: "What are your goals for the next 6 months?",
    answer: "Get stable housing, maybe go back to school",
    answered_at: "2025-11-05T10:26:00",
    skipped: false,
  },
];

export const mockServiceContacts: ServiceContact[] = [
  {
    contact_id: "1",
    service_name: "Safe Place for Youth - Emergency Shelter",
    contact_type: "form_submitted",
    status: "completed",
    contact_date: "2025-11-05T10:45:00",
    notes:
      "Submitted intake form for emergency shelter placement. Jordan expressed some nervousness about shelter life but is open to the option. Explained youth-specific environment and flexible rules.",
    next_steps:
      "Shelter coordinator will call Jordan within 24 hours to schedule intake appointment. Bed availability confirmed for next week.",
    stages: [
      {
        stage_name: "Initial Contact",
        status: "completed",
        date: "2025-11-05T10:45:00",
        description: "Intake form submitted successfully",
      },
      {
        stage_name: "Shelter Coordinator Review",
        status: "completed",
        date: "2025-11-05T16:20:00",
        description: "Application reviewed and approved",
      },
      {
        stage_name: "Intake Appointment",
        status: "completed",
        date: "2025-11-06T10:00:00",
        description: "Completed intake interview and orientation",
      },
      {
        stage_name: "Move-In",
        status: "completed",
        date: "2025-11-07T14:00:00",
        description: "Successfully moved into shelter",
      },
    ],
  },
  {
    contact_id: "2",
    service_name: "CalFresh (Food Assistance Program)",
    contact_type: "call_made",
    status: "completed",
    contact_date: "2025-11-06T15:00:00",
    notes:
      "Called CalFresh office on Jordan's behalf to inquire about expedited benefits for homeless youth. Confirmed eligibility for fast-track processing (3-day approval).",
    next_steps:
      "Application submitted online. Jordan should receive EBT card at shelter address within 5-7 business days.",
    stages: [
      {
        stage_name: "Eligibility Check",
        status: "completed",
        date: "2025-11-06T15:00:00",
        description: "Confirmed eligibility for expedited processing",
      },
      {
        stage_name: "Application Submitted",
        status: "completed",
        date: "2025-11-06T15:30:00",
        description: "Online application completed and submitted",
      },
      {
        stage_name: "Under Review",
        status: "completed",
        date: "2025-11-07T09:00:00",
        description: "Application approved - fast-track process",
      },
      {
        stage_name: "EBT Card Issued",
        status: "current",
        date: "2025-11-08T00:00:00",
        description: "Card being mailed to shelter address",
      },
      {
        stage_name: "Benefits Active",
        status: "upcoming",
        description: "Card should arrive within 5-7 business days",
      },
    ],
  },
  {
    contact_id: "3",
    service_name: "LA County Office of Education - Youth Services",
    contact_type: "referral",
    status: "pending",
    contact_date: "2025-11-07T11:20:00",
    notes:
      "Referred Jordan to educational support program for homeless youth. Program offers GED prep, tutoring, and college readiness support. Flexible scheduling to accommodate work.",
    next_steps:
      "Education coordinator will reach out to Jordan next week to schedule initial assessment.",
    stages: [
      {
        stage_name: "Referral Submitted",
        status: "completed",
        date: "2025-11-07T11:20:00",
        description: "Referral sent to education coordinator",
      },
      {
        stage_name: "Coordinator Outreach",
        status: "current",
        description: "Waiting for coordinator to contact Jordan",
      },
      {
        stage_name: "Initial Assessment",
        status: "upcoming",
        description: "Assessment to determine educational needs and goals",
      },
      {
        stage_name: "Program Enrollment",
        status: "upcoming",
        description: "Enroll in appropriate educational programs",
      },
    ],
  },
  {
    contact_id: "4",
    service_name: "Covered California (Health Insurance)",
    contact_type: "form_submitted",
    status: "pending",
    contact_date: "2025-11-07T14:30:00",
    notes:
      "Submitted Medi-Cal application for Jordan. As a homeless youth under 26, should qualify for full coverage with no premiums. Included supporting documentation from shelter.",
    next_steps:
      "Application is under review. Approval expected within 10-14 days. Jordan will receive insurance card at shelter address.",
    stages: [
      {
        stage_name: "Application Submitted",
        status: "completed",
        date: "2025-11-07T14:30:00",
        description: "Medi-Cal application with supporting documents submitted",
      },
      {
        stage_name: "Verification Process",
        status: "current",
        date: "2025-11-08T00:00:00",
        description: "County reviewing application and verifying eligibility",
      },
      {
        stage_name: "Approval Decision",
        status: "upcoming",
        description: "Expected approval within 10-14 days",
      },
      {
        stage_name: "Insurance Card Mailed",
        status: "upcoming",
        description: "Insurance card and welcome packet sent to shelter",
      },
    ],
  },
  {
    contact_id: "5",
    service_name: "Covenant House California - Job Training",
    contact_type: "call_made",
    status: "completed",
    contact_date: "2025-11-08T09:30:00",
    notes:
      "Connected with job training coordinator. Jordan expressed interest in culinary or retail training. Program includes resume building, interview prep, and paid internships.",
    next_steps:
      "Jordan scheduled for orientation on November 12th at 2:00 PM. Transportation assistance arranged.",
    stages: [
      {
        stage_name: "Initial Call",
        status: "completed",
        date: "2025-11-08T09:30:00",
        description: "Discussed program options with coordinator",
      },
      {
        stage_name: "Orientation Scheduled",
        status: "current",
        date: "2025-11-08T10:00:00",
        description: "Set for Nov 12 at 2:00 PM - transportation arranged",
      },
      {
        stage_name: "Skills Assessment",
        status: "upcoming",
        description: "Identify strengths and training pathway",
      },
      {
        stage_name: "Program Enrollment",
        status: "upcoming",
        description: "Begin culinary or retail training program",
      },
    ],
  },
];

export const mockEligibleBenefits: EligibleBenefit[] = [
  {
    benefit_id: "1",
    benefit_name: "Emergency Youth Shelter",
    category: "housing",
    eligibility_reason:
      "You qualify because you're under 24 and currently experiencing homelessness. Youth shelters provide a safe environment designed specifically for young people.",
    application_status: "approved",
    matched_at: "2025-11-05T10:30:00",
  },
  {
    benefit_id: "2",
    benefit_name: "CalFresh Food Benefits",
    category: "food",
    eligibility_reason:
      "You qualify for expedited food assistance because you have little to no income and are experiencing homelessness. This provides money for groceries each month.",
    application_status: "application_submitted",
    matched_at: "2025-11-05T10:32:00",
  },
  {
    benefit_id: "3",
    benefit_name: "Medi-Cal Health Coverage",
    category: "medical",
    eligibility_reason:
      "You qualify for free health insurance because you're under 26 and experiencing homelessness. This covers doctor visits, prescriptions, dental, and mental health services.",
    application_status: "in_review",
    matched_at: "2025-11-05T10:35:00",
  },
  {
    benefit_id: "4",
    benefit_name: "Educational Support Program",
    category: "education",
    eligibility_reason:
      "You qualify because you're a homeless youth who wants to continue your education. This program helps you finish high school, get your GED, or start college.",
    application_status: "not_started",
    matched_at: "2025-11-06T14:45:00",
  },
  {
    benefit_id: "5",
    benefit_name: "Job Training & Placement",
    category: "employment",
    eligibility_reason:
      "You qualify because you're a youth seeking employment. This program provides job skills training, resume help, and connects you with employers who want to hire young people.",
    application_status: "application_submitted",
    matched_at: "2025-11-06T14:50:00",
  },
  {
    benefit_id: "6",
    benefit_name: "Free Legal Aid for Youth",
    category: "legal",
    eligibility_reason:
      "You qualify for free legal help because you're under 24. Attorneys can help with issues like getting your ID, dealing with debts, or other legal questions.",
    application_status: "not_started",
    matched_at: "2025-11-07T10:15:00",
  },
  {
    benefit_id: "7",
    benefit_name: "Youth Mental Health Counseling",
    category: "mental_health",
    eligibility_reason:
      "You qualify for free counseling services designed for young people. These are youth-friendly therapists who understand what you're going through.",
    application_status: "not_started",
    matched_at: "2025-11-07T10:20:00",
  },
  {
    benefit_id: "8",
    benefit_name: "Transitional Housing Program",
    category: "housing",
    eligibility_reason:
      "You may qualify for longer-term housing assistance. This program helps you move from emergency shelter to your own apartment with support services.",
    application_status: "not_started",
    matched_at: "2025-11-08T09:00:00",
  },
];

// Statistics calculated from the data
export const calculateStats = () => {
  return {
    totalCalls: mockCallTranscripts.length,
    servicesContacted: mockServiceContacts.length,
    benefitsMatched: mockEligibleBenefits.length,
    questionsAnswered: mockIntakeResponses.filter((r) => !r.skipped).length,
    questionsSkipped: mockIntakeResponses.filter((r) => r.skipped).length,
  };
};
