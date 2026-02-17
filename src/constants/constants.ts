import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
export const STATS = [
  {
    icon: AccountBalanceOutlinedIcon,
    value: "₹2,400Cr+",
    label: "Assets Under Management",
    color: "#E8B84B",
  },
  {
    icon: GroupsOutlinedIcon,
    value: "1.2 Lakh+",
    label: "Verified Investors",
    color: "#2DD4BF",
  },
  {
    icon: VerifiedOutlinedIcon,
    value: "100%",
    label: "Repayment Rate",
    color: "#E8B84B",
  },
  {
    icon: WorkspacePremiumOutlinedIcon,
    value: "9–14%",
    label: "Average Annual Returns",
    color: "#2DD4BF",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "InvestPro helped me move from low-yield FDs to bonds earning 11.2% annually. The transparency and safety gave me confidence I never had before.",
    name: "Priya Mehta",
    role: "Chartered Accountant, Mumbai",
    rating: 5,
    returns: "11.2% p.a.",
  },
  {
    quote:
      "The auto-invest feature is brilliant. My idle cash now earns 9.8% without me touching it. Payouts hit every quarter like clockwork.",
    name: "Rahul Singhania",
    role: "Software Engineer, Bangalore",
    rating: 5,
    returns: "9.8% p.a.",
  },
  {
    quote:
      "As a retired professional, capital safety is everything. InvestPro's zero-default track record and senior secured bonds gave me exactly that.",
    name: "Dr. V. Krishnamurthy",
    role: "Retired IAS Officer, Chennai",
    rating: 5,
    returns: "10.5% p.a.",
  },
];

export const PARTNER_LOGOS = ["NSE", "BSE", "SEBI", "NSDL", "CRISIL", "ICRA"];

export const FOOTER_LINKS = {
  Products: ["Bonds", "Mutual Funds", "Fixed Deposits", "Portfolio Tracker"],
  Company: ["About Us", "Careers", "Press", "Blog"],
  Support: ["Help Centre", "Contact Us", "Risk Disclosure", "Grievances"],
  Legal: ["Privacy Policy", "Terms of Use", "SEBI Disclosures", "Investor Charter"],
};

export const FEATURES = [
  {
    icon: AccountBalanceOutlinedIcon,
    badge: "Fixed Income",
    badgeColor: "#E8B84B",
    title: "Premium Bonds",
    description:
      "Invest in carefully curated senior secured bonds from top-rated corporates. Earn fixed 9–12% annual returns with principal protection and quarterly payouts.",
    bullets: ["Senior secured instruments", "Quarterly interest payouts", "Start with ₹10,000"],
    cta: "Explore Bonds",
    gradient: "linear-gradient(135deg, rgba(232,184,75,0.08) 0%, transparent 60%)",
    accentColor: "#E8B84B",
  },
  {
    icon: AutoGraphOutlinedIcon,
    badge: "High Yield",
    badgeColor: "#2DD4BF",
    title: "Mutual Funds",
    description:
      "Diversify across debt, equity, and hybrid funds managed by top AMCs. Our AI-driven portfolio optimizer picks the best mix for your risk profile.",
    bullets: ["100+ curated fund options", "AI-powered allocation", "SIP from ₹500/month"],
    cta: "Browse Funds",
    gradient: "linear-gradient(135deg, rgba(45,212,191,0.08) 0%, transparent 60%)",
    accentColor: "#2DD4BF",
  },
  {
    icon: SecurityOutlinedIcon,
    badge: "Capital Safe",
    badgeColor: "#E8B84B",
    title: "Fixed Deposits",
    description:
      "Partner bank FDs with returns up to 9.5% p.a. — significantly higher than traditional bank rates, with full DICGC insurance coverage up to ₹5 Lakh.",
    bullets: ["Up to 9.5% interest", "DICGC insured", "Flexible tenures 7–365 days"],
    cta: "View FD Rates",
    gradient: "linear-gradient(135deg, rgba(232,184,75,0.08) 0%, transparent 60%)",
    accentColor: "#E8B84B",
  },
];

export const NAV_LINKS = ["Home", "About", "Services", "Investments", "Contact"];
