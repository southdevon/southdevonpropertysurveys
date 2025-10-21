'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className='font-sans text-gray-800 bg-white'>
      <section className='relative bg-[#2B2B2B] text-white py-20 px-6 text-center bg-cover bg-center'
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80')" }}>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative z-10'>
          <motion.h1 className='text-5xl font-bold mb-4'>South Devon Property Surveys</motion.h1>
          <motion.p className='text-lg mb-8 max-w-2xl mx-auto'>
            Independent property surveys, valuations, and expert advice across South Devon.
          </motion.p>
          <Button className='bg-[#A97142] text-white hover:bg-[#8b5e35]'>Request a Survey</Button>
        </div>
      </section>
    </div>
  );
}
