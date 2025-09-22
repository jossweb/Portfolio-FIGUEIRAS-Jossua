'use client';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
// Optionnel: avertir si manquante
if (!SITE_KEY) console.warn('Missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY')

type CaptchaSize = 'compact' | 'normal' | 'invisible';

export function ContactMe() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [captchaSize, setCaptchaSize] = useState<CaptchaSize>('normal');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const updateCaptchaSize = () => {
      if (window.innerWidth < 768) {
        setCaptchaSize('compact');
      } else {
        setCaptchaSize('normal');
      }
    };

    updateCaptchaSize();
    window.addEventListener('resize', updateCaptchaSize);

    return () => {
      window.removeEventListener('resize', updateCaptchaSize);
    };
  }, []);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!captchaValue) {
      alert('Please complete the CAPTCHA');
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captcha: captchaValue,
        }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
        setCaptchaValue(null);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full bg-[var(--foreground)] text-black px-0 px-2 md:px-20 py-8 rounded-3xl">
      <div className="container mx-auto px-0 sm:px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[30px] md:-[42px]font-bold text-center mb-10"
        >
          <span className="glitch text-[var(--background)]">Contact Form</span>
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <div className="relative">
              <label
                htmlFor="lastName"
                className="block text-xs md:text-sm text-[var(--background)] mb-1"
              >
                Last name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  placeholder='Last name'
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-[var(--background)] rounded-xl border border-black/20 text-black placeholder:text-black/50 focus:outline-none focus:border-black transition-all duration-300"
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="firstName"
                className="block text-xs md:text-sm text-[var(--background)] mb-1"
              >
                First Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  placeholder='First Name'
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-[var(--background)] rounded-xl border border-black/20 text-black placeholder:text-black/50 focus:outline-none focus:border-black transition-all duration-300"
                />
              </div>
            </div>
          </div>

          <div className="mb-3 relative">
            <label
              htmlFor="email"
              className="block text-xs md:text-sm text-[var(--background)] mb-1"
            >
              email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder='email'
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3.5 bg-[var(--background)] rounded-xl border border-black/20 text-black placeholder:text-black/50 focus:outline-none focus:border-black transition-all duration-300"
              />
            </div>
          </div>

          <div className="mb-5 relative">
            <label
              htmlFor="message"
              className="block text-xs md:text-sm text-[var(--background)] mb-1"
            >
              Message
            </label>
            <div className="relative">
              <textarea
                id="message"
                rows={5}
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-[var(--background)] rounded-xl border border-black/20 text-black placeholder:text-black/50 focus:outline-none focus:ring-1 focus:ring-black transition-all duration-300 resize-none"
              />
            </div>
          </div>

          <div className="mb-3 flex justify-center">
            <ReCAPTCHA
              sitekey={SITE_KEY ?? ''}
              onChange={handleCaptchaChange}
              size={captchaSize}
              theme="light"
            />
          </div>

          <div className="flex justify-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full md:w-auto md:min-w-[240px] flex items-center justify-center gap-2 px-10 py-3.5 bg-[var(--background)] text-[var(--foreground)] rounded-xl border border-black/20 relative overflow-hidden ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting || !captchaValue}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative cursor-pointer">
                {isSubmitting ? "Sending": "Send"}
              </span>
              <Send className="w-4 h-4 relative" />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}