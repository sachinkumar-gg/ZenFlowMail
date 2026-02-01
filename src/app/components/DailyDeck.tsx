import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { EmailCard } from './EmailCard';
import { MentalCapacityBar } from './MentalCapacityBar';
import { useEmail } from '@/context/EmailContext';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router';

export const DailyDeck: React.FC = () => {
  const { emails, mentalCapacity, completeCarousel, currentEmailIndex, setCurrentEmailIndex } = useEmail();
  const navigate = useNavigate();
  const sliderRef = useRef<Slider>(null);
  
  // Filter only important emails for the carousel
  const importantEmails = emails.filter(email => email.isImportant);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_current: number, next: number) => setCurrentEmailIndex(next),
    customPaging: () => (
      <div className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></div>
    ),
    dotsClass: "slick-dots !bottom-[-40px]"
  };

  const handleDone = () => {
    completeCarousel();
    navigate('/emails');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-3xl font-bold">ZenFlow</h1>
              <p className="text-gray-600">Daily Deck</p>
            </div>
            <button 
              onClick={handleDone}
              className="px-6 py-2 bg-green-400 hover:bg-green-500 text-white rounded-full font-medium flex items-center gap-2 transition-colors"
            >
              Done <Check className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mental Capacity */}
        <MentalCapacityBar capacity={mentalCapacity} />

        {/* Emails Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600 text-lg">
            {importantEmails.length} emails to review
          </p>
        </div>

        {/* Carousel */}
        <div className="pb-12">
          <Slider ref={sliderRef} {...settings}>
            {importantEmails.map(email => (
              <div key={email.id}>
                <EmailCard email={email} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
