export const metadata = {
  title: 'Home - Simples',
  description: 'Page description',
}
import { cookies, headers } from "next/headers";
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export default async  function Home() {

  const supabaseClient = createServerComponentClient({
    cookies,
  });

  const { data: userData, error: userError } =
    await supabaseClient.auth.getUser();

  console.log(userData)

  return (
    <>

      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  )
}
