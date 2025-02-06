import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/base.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Achievements from './components/Achievements/Achievements';
import Footer from './components/Footer/Footer';
import './styles/main.css';
import SeniorLeapClasses from './components/SeniorLeapClasses/SeniorLeapClasses';
import ExpectFromClasses from './components/ExpectFromClasses/ExpectFromClasses';
import ImageSlider from './components/ImageSlider/ImageSlider';
import Counter from './components/Counter/Counter';
import LeapAheadStudy from './components/LeapAheadStudy/LeapAheadStudy';
import HolisticApproach from './components/HolisticApproach/HolisticApproach';
import StudentTestimonials from './components/StudentTestimonials/StudentTestimonials';

// Add lazy loading for components that are not immediately visible
const LazySubjects = lazy(() => import('./components/Subjects/Subjects'));
const LazyEnrollForm = lazy(() => import('./components/EnrollForm/EnrollForm'));

function App() {
  // Create a HomePage component that includes all main page content
  const HomePage = () => (
    <>
      <Hero />
      <main>
        <Achievements />
        <SeniorLeapClasses />
        <ExpectFromClasses />
        <ImageSlider />
        <Counter />
        <LeapAheadStudy />
        <HolisticApproach />
        <StudentTestimonials />
        <Suspense fallback={<div>Loading...</div>}>
          <LazyEnrollForm />
          <LazySubjects />
        </Suspense>
      </main>
    </>
  );

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs" element={<div>Programs Page</div>} />
          <Route path="/about-us" element={<div>About Us Page</div>} />
          <Route path="/contact-us" element={<div>Contact Us Page</div>} />
          <Route path="/blogs" element={<div>Blogs Page</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
