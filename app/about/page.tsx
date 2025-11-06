import Image from 'next/image'
import { Sparkles, Award, Users, BookOpen, Quote } from 'lucide-react'

export default function About() {
  const expertise = [
    {
      title: 'Capsule Wardrobe Curation',
      description: 'Building timeless collections that work effortlessly together, season after season.',
      icon: '👗'
    },
    {
      title: 'Age-Appropriate Luxury Styling',
      description: 'Sophisticated elegance that celebrates your current chapter with confidence.',
      icon: '✨'
    },
    {
      title: 'Skincare for Mature Skin',
      description: 'Science-backed routines that honor your skin\'s evolution and natural beauty.',
      icon: '💎'
    },
    {
      title: 'Investment Piece Selection',
      description: 'Identifying quality pieces that transcend trends and deliver lasting value.',
      icon: '👜'
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: 'Former Senior Fashion Editor',
      detail: 'Vogue Paris',
      color: 'from-[#9A8A78] to-[#C1A38A]'
    },
    {
      icon: Users,
      title: '200+ Private Clients',
      detail: 'Styled Internationally',
      color: 'from-[#C1A38A] to-[#9A8A78]'
    },
    {
      icon: BookOpen,
      title: 'Featured Expert',
      detail: 'Harper\'s Bazaar & Elle',
      color: 'from-[#9A8A78] to-[#C1A38A]'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F5F1ED] via-white to-[#F5F1ED] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#9A8A78] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C1A38A] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mb-6">
              <Sparkles className="w-4 h-4 text-[#9A8A78]" />
              <span className="text-sm font-montserrat text-[#2C2420] tracking-wide">ABOUT COUTURE CHRONICLES</span>
            </div>
            
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-[#2C2420] mb-6 leading-tight">
              Where Sophistication
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9A8A78] to-[#C1A38A]">
                Meets Timelessness
              </span>
            </h1>
            
            <p className="font-montserrat text-lg md:text-xl text-[#2C2420]/70 leading-relaxed">
              A celebration of style that evolves beautifully with every decade
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#9A8A78]/20 to-[#C1A38A]/20 rounded-3xl blur-2xl"></div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/author-portrait.jpg"
                  alt="Isabella Moreau"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-[#F5F1ED]">
                <p className="font-playfair text-3xl font-bold text-[#9A8A78]">15+</p>
                <p className="font-montserrat text-sm text-[#2C2420]/70">Years of Expertise</p>
              </div>
            </div>

            <div>
              <div className="inline-block bg-gradient-to-r from-[#9A8A78] to-[#C1A38A] text-white px-4 py-1 rounded-full text-sm font-montserrat mb-4">
                Fashion Stylist & Beauty Curator
              </div>
              
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#2C2420] mb-6">
                Isabella Moreau
              </h2>
              
              <p className="font-montserrat text-lg text-[#2C2420]/80 leading-relaxed mb-8">
                A former fashion editor turned independent stylist, Isabella brings 15+ years of industry insight to women who refuse to be defined by age. She believes that true style is timeless, personal, and evolves beautifully with every decade.
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="bg-[#F5F1ED] px-4 py-2 rounded-full">
                  <span className="font-montserrat text-sm text-[#2C2420]">📍 Paris & New York</span>
                </div>
                <div className="bg-[#F5F1ED] px-4 py-2 rounded-full">
                  <span className="font-montserrat text-sm text-[#2C2420]">🇫🇷 Lyon Native</span>
                </div>
                <div className="bg-[#F5F1ED] px-4 py-2 rounded-full">
                  <span className="font-montserrat text-sm text-[#2C2420]">✨ Vogue Paris Alumni</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5F1ED] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#2C2420] mb-4">
              My Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#9A8A78] to-[#C1A38A] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8 font-montserrat text-lg text-[#2C2420]/80 leading-relaxed">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#F5F1ED]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9A8A78] to-[#C1A38A] rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl">
                  🏛️
                </div>
                <p>
                  My journey in fashion began in the most unexpected place—my grandmother's attic in Lyon, where I discovered trunks filled with perfectly preserved couture pieces from the 1960s. Running my fingers over the exquisite craftsmanship, I realized that true elegance transcends trends and time. This revelation shaped my entire career philosophy: style isn't about chasing youth; it's about celebrating who you are becoming.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#F5F1ED]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C1A38A] to-[#9A8A78] rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl">
                  🗼
                </div>
                <p>
                  After spending over a decade in the fast-paced world of fashion magazines in Paris and New York, I noticed a troubling gap. The industry was obsessed with youth, yet the most stylish, confident women I knew were those who had lived, learned, and developed their personal aesthetic over time. At 38, I left my editor position to create something different—a space where sophistication meets practicality, where investment pieces are valued over fleeting trends.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#F5F1ED]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9A8A78] to-[#C1A38A] rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl">
                  💫
                </div>
                <p>
                  Couture Chronicles was born from late-night conversations with friends who felt invisible in their late thirties and beyond. We're done apologizing for taking up space. We invest in quality over quantity, we understand our bodies and what flatters them, and we've learned that confidence is the best accessory. My mission is to share the insider knowledge I've gathered—from understanding fabric quality to finding that perfect red lipstick that works with mature skin—so that you can curate a wardrobe and beauty routine that makes you feel powerful.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#9A8A78] to-[#C1A38A] p-8 rounded-2xl shadow-lg text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 text-2xl">
                  ✨
                </div>
                <p>
                  Today, I split my time between my Paris apartment and New York studio, working with private clients and creating content that celebrates the refined, intentional approach to style that comes with experience. Because the truth is, we're not trying to look younger—we're trying to look like the best version of ourselves, right now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#2C2420] mb-4">
              Areas of Expertise
            </h2>
            <p className="font-montserrat text-lg text-[#2C2420]/70 max-w-2xl mx-auto">
              Curated knowledge from years of industry experience, dedicated to helping you develop your signature style
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-[#F5F1ED] to-white p-8 rounded-2xl border border-[#F5F1ED] hover:border-[#C1A38A] transition-all duration-300 hover:shadow-xl"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#2C2420] mb-3">
                  {item.title}
                </h3>
                <p className="font-montserrat text-[#2C2420]/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-br from-[#9A8A78] to-[#C1A38A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Quote className="w-16 h-16 text-white/30 mx-auto mb-8" />
          <blockquote className="text-center">
            <p className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6 leading-relaxed italic">
              "Elegance is not about being noticed, it's about being remembered."
            </p>
            <footer className="font-montserrat text-white/90 text-lg">
              — Isabella Moreau
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#2C2420] mb-4">
              Recognition & Impact
            </h2>
            <p className="font-montserrat text-lg text-[#2C2420]/70">
              Milestones that reflect a commitment to elevating timeless style
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9A8A78]/20 to-[#C1A38A]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-white p-8 rounded-2xl border border-[#F5F1ED] hover:border-[#C1A38A] transition-all duration-300 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-[#2C2420] mb-2">
                      {achievement.title}
                    </h3>
                    <p className="font-montserrat text-[#2C2420]/70">
                      {achievement.detail}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5F1ED] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#2C2420] mb-6">
            Join the Community
          </h2>
          <p className="font-montserrat text-lg text-[#2C2420]/70 mb-8 max-w-2xl mx-auto">
            Discover curated style insights, timeless beauty advice, and join a community of women who celebrate sophistication at every age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#9A8A78] to-[#C1A38A] text-white px-8 py-4 rounded-full font-montserrat font-medium hover:shadow-xl transition-all duration-300 hover:scale-105">
              Explore the Chronicles
            </button>
            <button className="bg-white text-[#9A8A78] px-8 py-4 rounded-full font-montserrat font-medium border-2 border-[#9A8A78] hover:bg-[#F5F1ED] transition-all duration-300">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
