const episodes = [
    { 
        num: 47, 
        title: "The Psychology Behind Winning Trades", 
        desc: "Why 90% of trading success is mental — and how to build the mindset of a consistently profitable trader in any market condition.", 
        tags: ["psychology", "mindset"], 
        duration: "48:32", 
        date: "Apr 12, 2026", 
        filter: "psychology",
        cover: "assets/ep-47.jpg",
        notes: `
            <p>In this episode, we dive deep into the psychology behind consistently profitable trading. Most traders focus 90% of their energy on strategy and indicators — but the real edge is between your ears.</p>
            <h3>What You'll Learn</h3>
            <ul>
                <li>Why emotional discipline trumps any technical strategy</li>
                <li>The 3 cognitive biases that destroy trading accounts</li>
                <li>How to build a pre-trade routine that eliminates impulsive decisions</li>
                <li>Practical journaling techniques for tracking your mental state</li>
                <li>The role of meditation and mindfulness in professional trading</li>
            </ul>
            <h3>Key Takeaways</h3>
            <p>Your psychology is your edge. The market doesn't care about your feelings — but your feelings will determine whether you follow your plan or blow your account. This episode gives you the tools to master the mental game.</p>
        `,
        timestamps: [
            { time: "0:00", label: "Introduction & why psychology matters" },
            { time: "5:42", label: "The 3 deadly cognitive biases in trading" },
            { time: "14:18", label: "Building a pre-trade routine" },
            { time: "23:05", label: "Journaling for mental clarity" },
            { time: "31:40", label: "Revenge trading & how to stop it" },
            { time: "39:22", label: "Mindfulness techniques for traders" },
            { time: "45:10", label: "Final thoughts & action steps" }
        ]
    },
    { 
        num: 46, 
        title: "Reading Price Action Like a Pro", 
        desc: "Forget lagging indicators — learn to read naked charts and understand what the market is truly telling you with pure price action analysis.", 
        tags: ["price-action", "technical"], 
        duration: "55:18", 
        date: "Apr 5, 2026", 
        filter: "technical",
        cover: "assets/ep-46.jpg",
        notes: "<p>Deep dive into price action analysis, candle patterns, and market flow without the noise of indicators.</p>",
        timestamps: []
    },
    { 
        num: 45, 
        title: "Risk Management: The Art of Survival", 
        desc: "Position sizing, stop losses, and capital preservation — the unglamorous but essential foundation of every successful trading career.", 
        tags: ["risk", "strategy"], 
        duration: "42:07", 
        date: "Mar 29, 2026", 
        filter: "risk",
        cover: "assets/ep-45.jpg",
        notes: "<p>Learn how to manage your capital like a professional and survive the inevitable losses.</p>",
        timestamps: []
    },
    { 
        num: 44, 
        title: "From Demo to Live: Making the Leap", 
        desc: "The critical transition from paper trading to real money — how to handle emotions, risk, and expectations when your capital is on the line.", 
        tags: ["beginner", "live-trading"], 
        duration: "38:45", 
        date: "Mar 22, 2026", 
        filter: "beginner",
        cover: "assets/ep-44.jpg"
    },
    { 
        num: 43, 
        title: "Supply and Demand Zones Decoded", 
        desc: "How institutional order flow creates supply and demand zones — and how retail traders can use them to find high-probability entries.", 
        tags: ["technical", "strategy"], 
        duration: "51:14", 
        date: "Mar 15, 2026", 
        filter: "technical",
        cover: "assets/ep-43.jpg"
    },
    { 
        num: 42, 
        title: "Interview: From $500 to Full-Time Trader", 
        desc: "Guest trader Chipo Mulenga shares her journey from a small account to trading full-time, including the biggest mistakes she made along the way.", 
        tags: ["interview", "journey"], 
        duration: "1:02:33", 
        date: "Mar 8, 2026", 
        filter: "interview",
        cover: "assets/ep-42.jpg"
    },
    { 
        num: 41, 
        title: "The Only 3 Candlestick Patterns You Need", 
        desc: "Cut through the noise. These three patterns account for 80% of actionable signals — learn to spot and trade them with confidence.", 
        tags: ["technical", "beginner"], 
        duration: "36:20", 
        date: "Mar 1, 2026", 
        filter: "technical",
        cover: "assets/ep-41.jpg"
    },
    { 
        num: 40, 
        title: "Building a Trading Journal That Works", 
        desc: "Most traders skip journaling. The ones who succeed don't. Here's a practical framework for tracking your trades and improving systematically.", 
        tags: ["strategy", "psychology"], 
        duration: "44:55", 
        date: "Feb 22, 2026", 
        filter: "strategy",
        cover: "assets/ep-40.jpg"
    },
    { 
        num: 39, 
        title: "Understanding Market Structure", 
        desc: "Higher highs, lower lows, and break of structure — the building blocks of trend analysis that every trader must master.", 
        tags: ["technical", "beginner"], 
        duration: "47:12", 
        date: "Feb 15, 2026", 
        filter: "technical",
        cover: "assets/ep-39.jpg"
    },
    { 
        num: 38, 
        title: "Trading During News Events", 
        desc: "Should you trade the news or sit it out? A balanced approach to high-volatility events and how to protect your capital.", 
        tags: ["strategy", "risk"], 
        duration: "39:48", 
        date: "Feb 8, 2026", 
        filter: "strategy",
        cover: "assets/ep-38.jpg"
    },
    { 
        num: 37, 
        title: "Interview: The Mind of a Prop Trader", 
        desc: "Funded trader Mwansa Tembo breaks down what prop firms look for, how to pass challenges, and managing someone else's money.", 
        tags: ["interview", "psychology"], 
        duration: "58:22", 
        date: "Feb 1, 2026", 
        filter: "interview",
        cover: "assets/ep-37.jpg"
    },
    { 
        num: 36, 
        title: "Backtesting Strategies the Right Way", 
        desc: "Your strategy is only as good as your data. Learn how to properly backtest, avoid curve fitting, and build real confidence in your edge.", 
        tags: ["strategy", "technical"], 
        duration: "43:10", 
        date: "Jan 25, 2026", 
        filter: "strategy",
        cover: "assets/ep-36.jpg"
    },
];

// Export if in a module environment, otherwise it's just a global variable
if (typeof module !== 'undefined' && module.exports) {
    module.exports = episodes;
}
