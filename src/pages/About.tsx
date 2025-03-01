
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
              <p className="text-lg text-gray-300 mb-0">
                Discover the passion and science behind Energize.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Our Mission"
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold mb-6">Fueling Potential, Naturally</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  At Energize, we believe energy drinks shouldn't come with a compromise. Our mission is to create premium energy beverages that deliver sustained energy without the crash, using natural ingredients that support both performance and wellbeing.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We're committed to creating products that not only taste great but also help our customers achieve more in their daily lives, whether that's in the gym, at work, or anywhere life takes them.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">From Concept to Can</h2>
              <p className="text-gray-700">
                The Energize story began in 2018 when our founders, both athletes and nutrition enthusiasts, became frustrated with the energy drink options available. They set out to create something better.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  year: "2018",
                  title: "The Beginning",
                  description: "Energize was founded with a mission to create a better energy drink using quality ingredients."
                },
                {
                  year: "2020",
                  title: "Market Launch",
                  description: "After two years of development and testing, our first product line was launched in select markets."
                },
                {
                  year: "2023",
                  title: "Growth & Innovation",
                  description: "Energize expanded to nationwide distribution and introduced new performance-focused product lines."
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary font-bold">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Minds Behind Energize</h2>
              <p className="text-gray-700">
                We're a diverse team of nutritionists, food scientists, athletes, and business professionals united by our passion for creating exceptional energy products.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Morgan",
                  role: "Founder & CEO",
                  image: "/images/team-1.jpg"
                },
                {
                  name: "Taylor Reed",
                  role: "Chief Product Officer",
                  image: "/images/team-2.jpg"
                },
                {
                  name: "Jordan Chen",
                  role: "Head of Nutrition",
                  image: "/images/team-3.jpg"
                },
                {
                  name: "Morgan Bailey",
                  role: "Marketing Director",
                  image: "/images/team-4.jpg"
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative mb-4 rounded-xl overflow-hidden aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-primary/90 text-white">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
              <p className="text-gray-200">
                These principles guide everything we do, from product development to customer service.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality Without Compromise",
                  description: "We source only the highest quality ingredients and maintain rigorous standards in our manufacturing process."
                },
                {
                  title: "Transparency",
                  description: "We believe in being open about what goes into our products and how they're made."
                },
                {
                  title: "Innovation",
                  description: "We're constantly researching and developing new formulations to improve our products."
                },
                {
                  title: "Sustainability",
                  description: "We're committed to reducing our environmental impact through responsible sourcing and packaging."
                },
                {
                  title: "Community",
                  description: "We support active lifestyles and community initiatives that align with our mission."
                },
                {
                  title: "Customer Focus",
                  description: "Our customers' needs and feedback drive our product development and business decisions."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-200">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
