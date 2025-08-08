import React, { useState, useEffect } from 'react';
import { Calculator, BookOpen, PiggyBank, TrendingUp, Menu, X, Sun, Moon, IndianRupee, Smartphone, Award, Users } from 'lucide-react';

// Types
interface GlossaryTerm {
    id: string;
    term: string;
    hindi: string;
    definition: string;
    example: string;
}

interface SavingsTip {
    id: string;
    title: string;
    description: string;
    amount: string;
    category: string;
}

interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correct: number;
    explanation: string;
}

// Sample Data
const glossaryTerms: GlossaryTerm[] = [
    {
        id: '1',
        term: 'PPF (Public Provident Fund)',
        hindi: 'सार्वजनिक भविष्य निधि',
        definition: 'A long-term savings scheme with tax benefits and guaranteed returns, locked for 15 years.',
        example: 'Invest ₹1.5 lakh annually in PPF to get tax deduction under Section 80C and earn tax-free returns.'
    },
    {
        id: '2',
        term: 'SIP (Systematic Investment Plan)',
        hindi: 'व्यवस्थित निवेश योजना',
        definition: 'A method of investing in mutual funds where you invest a fixed amount regularly.',
        example: 'Start a SIP of ₹5,000 monthly in an equity mutual fund to build wealth over time.'
    },
    {
        id: '3',
        term: 'Fixed Deposit (FD)',
        hindi: 'सावधि जमा',
        definition: 'A safe investment where you deposit money for a fixed period at guaranteed interest rates.',
        example: 'Bank FDs currently offer 6-7% annual interest with capital protection.'
    },
    {
        id: '4',
        term: 'UPI (Unified Payments Interface)',
        hindi: 'एकीकृत भुगतान इंटरफ़ेस',
        definition: 'Real-time payment system that allows instant money transfer between bank accounts.',
        example: 'Use PhonePe, Google Pay, or Paytm to send money instantly using UPI ID.'
    }
];

const savingsTips: SavingsTip[] = [
    {
        id: '1',
        title: 'Start Small, Think Big',
        description: 'Begin with just ₹100-500 monthly savings and gradually increase as your income grows.',
        amount: '₹500/month',
        category: 'Beginner'
    },
    {
        id: '2',
        title: 'Use the 50-30-20 Rule',
        description: '50% for needs, 30% for wants, 20% for savings and investments.',
        amount: '20% of income',
        category: 'Planning'
    },
    {
        id: '3',
        title: 'Automate Your Savings',
        description: 'Set up automatic transfers to your savings account right after salary credit.',
        amount: '₹5,000/month',
        category: 'Automation'
    },
    {
        id: '4',
        title: 'Cut Unnecessary Subscriptions',
        description: 'Review and cancel unused OTT, gym, or app subscriptions to save money.',
        amount: '₹2,000/month',
        category: 'Expense Management'
    }
];

const quizQuestions: QuizQuestion[] = [
    {
        id: '1',
        question: 'What is the lock-in period for PPF in India?',
        options: ['10 years', '15 years', '20 years', '5 years'],
        correct: 1,
        explanation: 'PPF has a mandatory lock-in period of 15 years, after which you can withdraw or extend.'
    },
    {
        id: '2',
        question: 'What does SIP stand for?',
        options: ['Simple Investment Plan', 'Systematic Investment Plan', 'Secure Investment Plan', 'Special Investment Plan'],
        correct: 1,
        explanation: 'SIP stands for Systematic Investment Plan, allowing regular investments in mutual funds.'
    },
    {
        id: '3',
        question: 'Which payment method is most popular for digital transactions in India?',
        options: ['Credit Card', 'Debit Card', 'UPI', 'Net Banking'],
        correct: 2,
        explanation: 'UPI has become the most popular digital payment method in India due to its convenience and instant transfers.'
    }
];

const dailyTips = [
    "Track your daily expenses using apps like Walnut or ET Money to identify spending patterns.",
    "Invest in ELSS mutual funds to save tax under Section 80C while building wealth.",
    "Keep 6 months of expenses as emergency fund in a liquid fund or savings account.",
    "Start investing early - even ₹1000 monthly SIP can create significant wealth over 20 years.",
    "Use credit cards wisely - pay full amount before due date to avoid interest charges."
];

// Components
const Navbar: React.FC<{ darkMode: boolean; toggleDarkMode: () => void }> = ({ darkMode, toggleDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-lg sticky top-0 z-50`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <IndianRupee className="h-8 w-8 text-green-600 mr-2" />
                        <span className="font-bold text-xl">वित्त सीखो</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="hover:text-green-600 transition-colors">Home</a>
                        <a href="#glossary" className="hover:text-green-600 transition-colors">Glossary</a>
                        <a href="#savings" className="hover:text-green-600 transition-colors">Savings</a>
                        <a href="#investing" className="hover:text-green-600 transition-colors">Investing</a>
                        <a href="#calculator" className="hover:text-green-600 transition-colors">EMI Calculator</a>
                        <a href="#quiz" className="hover:text-green-600 transition-colors">Quiz</a>
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mr-2"
                        >
                            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                        <a href="#home" className="block px-3 py-2 hover:text-green-600">Home</a>
                        <a href="#glossary" className="block px-3 py-2 hover:text-green-600">Glossary</a>
                        <a href="#savings" className="block px-3 py-2 hover:text-green-600">Savings</a>
                        <a href="#investing" className="block px-3 py-2 hover:text-green-600">Investing</a>
                        <a href="#calculator" className="block px-3 py-2 hover:text-green-600">Calculator</a>
                        <a href="#quiz" className="block px-3 py-2 hover:text-green-600">Quiz</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

const Hero: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
    return (
        <section id="home" className={`${darkMode ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-green-600 to-blue-600'} text-white py-20`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Start Your Financial Journey Today
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                    Learn how to save, invest, and grow your money in India with simple, practical advice in Hindi and English
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Start Learning
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                        Watch Demo
                    </button>
                </div>
            </div>
        </section>
    );
};

const QuoteBanner: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
    const [currentTip, setCurrentTip] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTip((prev) => (prev + 1) % dailyTips.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-green-50 text-gray-800'} py-4 px-4`}>
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-sm md:text-base font-medium">
                    💡 Daily Tip: {dailyTips[currentTip]}
                </p>
            </div>
        </div>
    );
};

const FeatureCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    darkMode: boolean;
}> = ({ icon, title, description, darkMode }) => {
    return (
        <div className={`${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-200'} p-6 rounded-lg shadow-lg border hover:shadow-xl transition-shadow cursor-pointer`}>
            <div className="text-green-600 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
        </div>
    );
};

const WhatYouLearn: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
    const features = [
        {
            icon: <BookOpen className="h-8 w-8" />,
            title: "Financial Terms Made Simple",
            description: "Understand PPF, SIP, FD, and other Indian financial terms with Hindi translations and real examples."
        },
        {
            icon: <PiggyBank className="h-8 w-8" />,
            title: "Smart Saving Strategies",
            description: "Learn practical tips to save money on Indian household expenses and build an emergency fund."
        },
        {
            icon: <TrendingUp className="h-8 w-8" />,
            title: "Investment Guidance",
            description: "Discover mutual funds, PPF, ELSS, and other investment options suitable for Indian investors."
        },
        {
            icon: <Calculator className="h-8 w-8" />,
            title: "EMI Calculator",
            description: "Calculate your home loan, car loan, or personal loan EMIs with our easy-to-use calculator."
        },
        {
            icon: <Smartphone className="h-8 w-8" />,
            title: "Digital Payments",
            description: "Master UPI, mobile banking, and digital wallets for secure and convenient transactions."
        },
        {
            icon: <Award className="h-8 w-8" />,
            title: "Test Your Knowledge",
            description: "Take quizzes to test your financial knowledge and track your learning progress."
        }
    ];

    return (
        <section className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} py-16`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Learn</h2>
                    <p className={`text-lg md:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                        Master the basics of personal finance with content designed specifically for Indian households and investors
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            darkMode={darkMode}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Glossary: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
    const [selectedTerm, setSelectedTerm] = useState<string | null>(null);

    return (
        <section id="glossary" className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} py-16`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Financial Glossary</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {glossaryTerms.map((term) => (
                        <div
                            key={term.id}
                            className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} border rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow`}
                            onClick={() => setSelectedTerm(selectedTerm === term.id ? null : term.id)}
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-semibold text-green-600">{term.term}</h3>
                                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>{term.hindi}</p>
                                </div>
                                <BookOpen className="h-5 w-5 text-green-600 flex-shrink-0" />
                            </div>

                            {selectedTerm === term.id && (
                                <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-600">
                                    <p className="mb-3">{term.definition}</p>
                                    <div className={`${darkMode ? 'bg-gray-600' : 'bg-green-50'} p-3 rounded-lg`}>
                                        <p className="text-sm"><strong>Example:</strong> {term.example}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SavingsTips: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
    return (
        <section id="savings" className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} py-16`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Savings Tips for Indian Households</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {savingsTips.map((tip) => (
                        <div key={tip.id} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg p-6 hover:shadow-lg transition-shadow`}>
                            <div className="flex justify-between items-start mb-3">
                <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-green-700 text-green-100' : 'bg-green-100 text-green-800'}`}>
                  {tip.category}
                </span>
                                <PiggyBank className="h-5 w-5 text-green-600" />
                            </div>

                            <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-3`}>{tip.description}</p>

                            <div className="text-lg font-bold text-green-600">
                                Save: {tip.amount}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const EMICalculator: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
    const [principal, setPrincipal] = useState<number>(500000);
    const [rate, setRate] = useState<number>(8.5);
    const [tenure, setTenure] = useState<number>(20);
    const [emi, setEmi] = useState<number>(0);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [totalInterest, setTotalInterest] = useState<number>(0);

    useEffect(() => {
        const monthlyRate = rate / (12 * 100);
        const months = tenure * 12;

        if (monthlyRate > 0) {
            const emiAmount = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
            setEmi(emiAmount);
            setTotalAmount(emiAmount * months);
            setTotalInterest(emiAmount * months - principal);
        }
    }, [principal, rate, tenure]);

    return (
        <section id="calculator" className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} py-16`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">EMI Calculator</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} border rounded-lg p-6`}>
                        <h3 className="text-xl font-semibold mb-6">Loan Details</h3>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Principal Amount (₹)</label>
                                <input
                                    type="number"
                                    value={principal}
                                    onChange={(e) => setPrincipal(Number(e.target.value))}
                                    className={`w-full px-3 py-2 border rounded-md ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300'}`}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Interest Rate (% per annum)</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={rate}
                                    onChange={(e) => setRate(Number(e.target.value))}
                                    className={`w-full px-3 py-2 border rounded-md ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300'}`}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Tenure (years)</label>
                                <input
                                    type="number"
                                    value={tenure}
                                    onChange={(e) => setTenure(Number(e.target.value))}
                                    className={`w-full px-3 py-2 border rounded-md ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300'}`}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} border rounded-lg p-6`}>
                        <h3 className="text-xl font-semibold mb-6">Calculation Results</h3>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                                <span className="text-green-800 dark:text-green-200">Monthly EMI</span>
                                <span className="text-xl font-bold text-green-800 dark:text-green-200">
                  ₹{emi.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                </span>
                            </div>

                            <div className="flex justify-between">
                                <span>Total Amount</span>
                                <span className="font-semibold">₹{totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Total Interest</span>
                                <span className="font-semibold">₹{totalInterest.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                            </div>

                            <div className="flex justify-between border-t pt-2">
                                <span>Principal Amount</span>
                                <span className="font-semibold">₹{principal.toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const MiniQuiz: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswer = (answerIndex: number) => {
        setSelectedAnswer(answerIndex);
        if (answerIndex === quizQuestions[currentQuestion].correct) {
            setScore(score + 1);
        }
        setShowResult(true);
    };

    const nextQuestion = () => {
        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        } else {
            // Quiz completed
            alert(`Quiz completed! Your score: ${score + (selectedAnswer === quizQuestions[currentQuestion].correct ? 1 : 0)}/${quizQuestions.length}`);
        }
    };

    return (
        <section id="quiz" className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} py-16`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Test Your Financial Knowledge</h2>

                <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg p-8`}>
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-medium">Question {currentQuestion + 1} of {quizQuestions.length}</span>
                            <span className="text-sm font-medium">Score: {score}/{quizQuestions.length}</span>
                        </div>
                        <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                            <div
                                className="bg-green-600 h-2 rounded-full transition-all"
                                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                            ></div>
                        </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-6">{quizQuestions[currentQuestion].question}</h3>

                    <div className="space-y-3 mb-6">
                        {quizQuestions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => !showResult && handleAnswer(index)}
                                disabled={showResult}
                                className={`w-full text-left p-4 rounded-lg border transition-colors ${
                                    showResult
                                        ? index === quizQuestions[currentQuestion].correct
                                            ? 'bg-green-100 border-green-500 text-green-800 dark:bg-green-900 dark:text-green-200'
                                            : selectedAnswer === index
                                                ? 'bg-red-100 border-red-500 text-red-800 dark:bg-red-900 dark:text-red-200'
                                                : darkMode
                                                    ? 'bg-gray-700 border-gray-600 text-gray-300'
                                                    : 'bg-gray-50 border-gray-300'
                                        : darkMode
                                            ? 'bg-gray-700 border-gray-600 hover:bg-gray-600'
                                            : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                                }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    {showResult && (
                        <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-50'} p-4 rounded-lg mb-4`}>
                            <p className="font-medium mb-2">
                                {selectedAnswer === quizQuestions[currentQuestion].correct ? '✅ Correct!' : '❌ Incorrect!'}
                            </p>
                            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {quizQuestions[currentQuestion].explanation}
                            </p>
                        </div>
                    )}

                    {showResult && (
                        <button
                            onClick={nextQuestion}
                            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                        >
                            {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Complete Quiz'}
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

const Footer: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
    return (
        <footer className={`${darkMode ? 'bg-gray-900 text-white border-gray-800' : 'bg-gray-800 text-white border-gray-700'} border-t py-12`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center mb-4">
                            <IndianRupee className="h-8 w-8 text-green-600 mr-2" />
                            <span className="font-bold text-xl">वित्त सीखो</span>
                        </div>
                        <p className="text-gray-400">
                            Empowering Indians with financial knowledge to build wealth and secure their future.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Home</a>
                            <a href="#glossary" className="block text-gray-400 hover:text-white transition-colors">Glossary</a>
                            <a href="#savings" className="block text-gray-400 hover:text-white transition-colors">Savings Tips</a>
                            <a href="#calculator" className="block text-gray-400 hover:text-white transition-colors">EMI Calculator</a>
                            <a href="#quiz" className="block text-gray-400 hover:text-white transition-colors">Quiz</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
                        <div className="space-y-2 text-gray-400">
                            <p>📧 info@vittsikho.in</p>
                            <p>📱 +91 98765 43210</p>
                            <p>🌐 Made for India with ❤️</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2024 वित्त सीखो (Vitt Sikho). Built with React + TypeScript + Tailwind CSS.
                        Educational content only - please consult financial advisors for investment decisions.
                    </p>
                </div>
            </div>
        </footer>
    );
};

const InvestingGuide: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
    const investmentOptions = [
        {
            name: 'Mutual Funds',
            hindi: 'म्यूचुअल फंड',
            risk: 'Medium to High',
            returns: '10-15% annually',
            description: 'Professional fund managers invest your money in diversified portfolios.',
            benefits: ['Professional management', 'Diversification', 'SIP options', 'Tax benefits (ELSS)']
        },
        {
            name: 'Public Provident Fund (PPF)',
            hindi: 'सार्वजनिक भविष्य निधि',
            risk: 'Very Low',
            returns: '7-8% annually',
            description: '15-year lock-in investment with tax benefits and guaranteed returns.',
            benefits: ['Tax deduction', 'Tax-free returns', 'Government backing', 'Compounding benefits']
        },
        {
            name: 'Fixed Deposits (FD)',
            hindi: 'सावधि जमा',
            risk: 'Very Low',
            returns: '5-7% annually',
            description: 'Safe investment option offered by banks with guaranteed returns.',
            benefits: ['Capital protection', 'Predictable returns', 'Easy to understand', 'Loan against FD']
        },
        {
            name: 'National Pension System (NPS)',
            hindi: 'राष्ट्रीय पेंशन प्रणाली',
            risk: 'Low to Medium',
            returns: '8-12% annually',
            description: 'Retirement-focused investment with tax benefits and long-term wealth creation.',
            benefits: ['Tax benefits', 'Low cost', 'Retirement corpus', 'Partial withdrawal']
        }
    ];

    return (
        <section id="investing" className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} py-16`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Beginner's Guide to Investing</h2>
                <p className={`text-lg text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-12 max-w-3xl mx-auto`}>
                    Start your investment journey with these popular and reliable options available in India
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {investmentOptions.map((option, index) => (
                        <div key={index} className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} border rounded-lg p-6 hover:shadow-lg transition-shadow`}>
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-green-600">{option.name}</h3>
                                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{option.hindi}</p>
                                </div>
                                <TrendingUp className="h-6 w-6 text-green-600 flex-shrink-0" />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <span className="text-sm font-medium">Risk Level</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{option.risk}</p>
                                </div>
                                <div>
                                    <span className="text-sm font-medium">Expected Returns</span>
                                    <p className="text-sm font-semibold text-green-600">{option.returns}</p>
                                </div>
                            </div>

                            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{option.description}</p>

                            <div>
                                <span className="text-sm font-medium mb-2 block">Key Benefits:</span>
                                <ul className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-1`}>
                                    {option.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <span className="text-green-600 mr-2">✓</span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`${darkMode ? 'bg-blue-900 border-blue-800' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6 mt-12`}>
                    <h3 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-200">
                        💡 Investment Tips for Beginners
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700 dark:text-blue-300">
                        <div>
                            <p className="mb-2">• Start with small amounts (₹500-1000 monthly)</p>
                            <p className="mb-2">• Diversify across different asset classes</p>
                            <p>• Invest regularly through SIPs for rupee cost averaging</p>
                        </div>
                        <div>
                            <p className="mb-2">• Stay invested for long term (5+ years)</p>
                            <p className="mb-2">• Review and rebalance annually</p>
                            <p>• Don't panic during market volatility</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Stats Section
const StatsSection: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
    const stats = [
        { icon: <Users className="h-8 w-8" />, number: '10,000+', label: 'Happy Learners' },
        { icon: <BookOpen className="h-8 w-8" />, number: '50+', label: 'Financial Terms' },
        { icon: <Award className="h-8 w-8" />, number: '100+', label: 'Quiz Questions' },
        { icon: <TrendingUp className="h-8 w-8" />, number: '₹5L+', label: 'Money Saved by Users' }
    ];

    return (
        <section className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-green-600 text-white'} py-16`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="flex justify-center mb-4 text-white">
                                {stat.icon}
                            </div>
                            <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                            <div className="text-sm md:text-base opacity-90">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Main App Component
const FinancialEducationApp: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
        }
    }, []);

    useEffect(() => {
        // Save theme preference
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <div className={`${darkMode ? 'dark' : ''} min-h-screen`}>
            <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen`}>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <QuoteBanner darkMode={darkMode} />
                <Hero darkMode={darkMode} />
                <WhatYouLearn darkMode={darkMode} />
                <StatsSection darkMode={darkMode} />
                <Glossary darkMode={darkMode} />
                <SavingsTips darkMode={darkMode} />
                <InvestingGuide darkMode={darkMode} />
                <EMICalculator darkMode={darkMode} />
                <MiniQuiz darkMode={darkMode} />
                <Footer darkMode={darkMode} />
            </div>
        </div>
    );
};

export default FinancialEducationApp;