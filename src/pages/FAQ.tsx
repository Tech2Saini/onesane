import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, Clock, DollarSign, Users, Zap, MessageSquare, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Badge } from '@/components/ui/badge';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqData = [
    {
      id: 'pricing-1',
      category: 'Pricing',
      icon: DollarSign,
      question: "What's included in your consultation hours?",
      answer: "Our consultation hours cover strategy sessions, planning meetings, progress reviews, and technical discussions. We focus on high-impact activities like AI strategy development, process analysis, solution architecture, and implementation planning. Every minute is maximized for value, with detailed session notes and action items provided after each meeting.",
      popular: true
    },
    {
      id: 'pricing-2',
      category: 'Pricing',
      icon: DollarSign,
      question: "Can I upgrade or downgrade my package during the project?",
      answer: "Yes, absolutely! Package changes are common as project scope evolves. We'll assess your current progress, adjust deliverables accordingly, and provide transparent pricing for any changes. Upgrades typically extend timelines to include additional features, while downgrades focus on core deliverables with potential timeline acceleration.",
      popular: false
    },
    {
      id: 'pricing-3',
      category: 'Pricing',
      icon: DollarSign,
      question: "Do you offer payment plans or milestone-based billing?",
      answer: "Yes, we offer flexible payment options. For larger projects, we typically use milestone-based billing: 30% upfront, 40% at mid-project milestone, and 30% upon completion. We also offer monthly payment plans for ongoing services and can customize payment schedules based on your cash flow needs.",
      popular: false
    },
    {
      id: 'process-1',
      category: 'Process',
      icon: Zap,
      question: "What's your typical project timeline?",
      answer: "Project timelines vary by complexity: Starter packages typically take 2-3 weeks, Professional packages require 4-6 weeks, and Enterprise solutions need 8-12 weeks. We provide detailed timelines during initial consultation, including key milestones, review points, and buffer time for revisions. Rush delivery options are available for 50% additional cost.",
      popular: true
    },
    {
      id: 'process-2',
      category: 'Process',
      icon: Zap,
      question: "How do you handle revisions and feedback?",
      answer: "Each package includes specific revision rounds (1-3 depending on tier). We use structured feedback sessions with clear documentation. Revisions are prioritized by impact and feasibility. Additional revisions beyond the included rounds are available at $200 each. We encourage consolidated feedback to maximize efficiency and maintain project momentum.",
      popular: false
    },
    {
      id: 'process-3',
      category: 'Process',
      icon: Zap,
      question: "What happens if my project scope changes?",
      answer: "Scope changes are managed through our change request process. We assess the impact on timeline, budget, and deliverables, then provide options: adjust existing scope, extend timeline, or move items to a future phase. All changes are documented and approved before implementation to maintain transparency and budget control.",
      popular: true
    },
    {
      id: 'team-1',
      category: 'Team & Support',
      icon: Users,
      question: "Who will be working on my project?",
      answer: "You'll have a dedicated project team including a lead consultant (your main point of contact), technical specialists based on your needs (AI engineers, automation experts, developers), and a project coordinator. For Enterprise clients, we assign a dedicated account manager. Team composition is determined during project kickoff based on your specific requirements.",
      popular: true
    },
    {
      id: 'team-2',
      category: 'Team & Support',
      icon: Users,
      question: "What level of support do I get after project completion?",
      answer: "All packages include 30 days of post-launch support for bug fixes and minor adjustments. We also offer extended support plans: 3 months for $300/month or 6 months for $500/month. This includes priority email support, minor updates, performance monitoring, and quarterly strategy check-ins.",
      popular: false
    },
    {
      id: 'team-3',
      category: 'Team & Support',
      icon: Users,
      question: "How do you ensure quality and meet deadlines?",
      answer: "We use a structured project management approach with regular check-ins, milestone reviews, and quality gates. Each deliverable goes through internal review before client presentation. We maintain 98% on-time delivery through careful planning, buffer time allocation, and proactive communication about any potential delays.",
      popular: false
    },
    {
      id: 'timeline-1',
      category: 'Timeline',
      icon: Clock,
      question: "How quickly can you start my project?",
      answer: "We typically begin new projects within 1-2 weeks of contract signing, depending on our current capacity and your project complexity. Rush starts (within 3-5 days) are available for an additional 25% fee. We'll provide an exact start date during our initial consultation based on team availability and project requirements.",
      popular: true
    },
    {
      id: 'timeline-2',
      category: 'Timeline',
      icon: Clock,
      question: "What if my project takes longer than expected?",
      answer: "If delays are due to scope creep or additional requests, we'll discuss timeline adjustments and any associated costs. If delays are on our end due to unforeseen technical challenges, we'll absorb the additional time without extra charges. We provide weekly progress updates to catch potential delays early.",
      popular: false
    },
    {
      id: 'timeline-3',
      category: 'Timeline',
      icon: Clock,
      question: "Can you work with urgent deadlines?",
      answer: "Yes, we offer expedited delivery for urgent projects. This typically involves dedicating additional resources and extending work hours. Rush delivery (50% faster than standard) costs an additional 50% of the project fee. We'll assess feasibility during initial consultation and provide realistic timelines for your deadline requirements.",
      popular: false
    },
    {
      id: 'communication-1',
      category: 'Communication',
      icon: MessageSquare,
      question: "How often will we communicate during the project?",
      answer: "Communication frequency depends on your package: Starter clients get weekly email updates plus monthly calls, Professional clients receive bi-weekly progress calls plus Slack access, Enterprise clients get weekly strategy sessions plus dedicated account manager access. All clients receive immediate response for urgent matters.",
      popular: true
    },
    {
      id: 'communication-2',
      category: 'Communication',
      icon: MessageSquare,
      question: "What tools do you use for project management and communication?",
      answer: "We use Slack for day-to-day communication, Notion for project documentation and progress tracking, Calendly for scheduling meetings, and Loom for detailed video explanations of complex concepts. We can also adapt to your preferred tools like Microsoft Teams, Asana, or Monday.com if needed.",
      popular: false
    }
  ];

  const categories = ['All', 'Pricing', 'Process', 'Team & Support', 'Timeline', 'Communication'];
  
  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularFAQs = faqData.filter(faq => faq.popular);

  return (
    <div className="min-h-screen bg-background parallax-bg">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 animate-fade-in-up">
              <HelpCircle className="w-5 h-5 text-primary animate-pulse-neon" />
              <span className="text-sm font-medium">Frequently Asked Questions</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 neon-text animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              FAQ Center
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Find answers to common questions about our process, pricing, timelines, and services. 
              Can't find what you're looking for? We're here to help!
            </p>

            {/* Search Bar */}
            <div className="glass-panel p-4 max-w-md mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 neon-glow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Questions */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-8 h-8 text-primary animate-pulse-neon" />
              <h2 className="text-3xl font-bold neon-text">Most Popular Questions</h2>
            </div>
            
            <div className="space-y-4">
              {popularFAQs.map((faq, index) => (
                <Collapsible key={faq.id} open={openItems.includes(faq.id)}>
                  <Card className="glass-panel border-0 hover-lift animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <CollapsibleTrigger 
                      className="w-full text-left"
                      onClick={() => toggleItem(faq.id)}
                    >
                      <CardHeader className="flex flex-row items-center justify-between p-6">
                        <div className="flex items-center gap-4">
                          <faq.icon className="w-6 h-6 text-primary" />
                          <div>
                            <CardTitle className="text-left hover:text-primary transition-colors">
                              {faq.question}
                            </CardTitle>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="outline" className="neon-glow">
                                {faq.category}
                              </Badge>
                              <Badge className="bg-primary/20 text-primary border-primary/30">
                                Popular
                              </Badge>
                            </div>
                          </div>
                        </div>
                        {openItems.includes(faq.id) ? (
                          <ChevronUp className="w-5 h-5 text-primary" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </CardHeader>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <CardContent className="pt-0 pb-6 px-6">
                        <div className="pl-10">
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "neon-glow" : "hover:neon-glow"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* All FAQs */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 neon-text">
              {searchTerm ? `Search Results (${filteredFAQs.length})` : 'All Questions'}
            </h2>
            
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No questions found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your search or browse by category</p>
                <Button variant="outline" className="neon-glow">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Ask Your Question
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <Collapsible key={faq.id} open={openItems.includes(faq.id)}>
                    <Card className="glass-panel border-0 hover-lift animate-fade-in-up" style={{animationDelay: `${index * 0.05}s`}}>
                      <CollapsibleTrigger 
                        className="w-full text-left"
                        onClick={() => toggleItem(faq.id)}
                      >
                        <CardHeader className="flex flex-row items-center justify-between p-6">
                          <div className="flex items-center gap-4">
                            <faq.icon className="w-6 h-6 text-primary" />
                            <div>
                              <CardTitle className="text-left hover:text-primary transition-colors text-lg">
                                {faq.question}
                              </CardTitle>
                              <div className="flex items-center gap-2 mt-2">
                                <Badge variant="outline" className="neon-glow">
                                  {faq.category}
                                </Badge>
                                {faq.popular && (
                                  <Badge className="bg-primary/20 text-primary border-primary/30">
                                    Popular
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          {openItems.includes(faq.id) ? (
                            <ChevronUp className="w-5 h-5 text-primary" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                          )}
                        </CardHeader>
                      </CollapsibleTrigger>
                      
                      <CollapsibleContent>
                        <CardContent className="pt-0 pb-6 px-6">
                          <div className="pl-10">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </div>
                        </CardContent>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-20 cyber-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MessageSquare className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse-neon" />
            <h2 className="text-4xl font-bold mb-6 neon-text">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help! 
              Get in touch and we'll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-lift">
                <MessageSquare className="w-5 h-5 mr-2" />
                Ask Your Question
              </Button>
              <Button variant="outline" size="lg" className="neon-glow">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;