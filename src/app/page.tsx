import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, Video, Calendar, FileText } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Healthcare at Your Fingertips
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with licensed healthcare providers through secure video consultations.
            Get diagnosed, treated, and receive prescriptions from the comfort of home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/auth/signin">
              <Button size="lg" className="min-w-[200px]">
                Book Appointment
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="min-w-[200px]">
                Provider Portal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Calendar className="w-12 h-12 text-blue-600" />}
              title="Book Appointment"
              description="Choose a time that works for you. See available providers and their specializations."
            />
            <FeatureCard
              icon={<Video className="w-12 h-12 text-blue-600" />}
              title="Video Consultation"
              description="Meet with your provider through secure, HIPAA-compliant video calls."
            />
            <FeatureCard
              icon={<FileText className="w-12 h-12 text-blue-600" />}
              title="Get Prescription"
              description="Receive e-prescriptions sent directly to your preferred pharmacy."
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <BenefitItem text="Board-certified healthcare providers" />
            <BenefitItem text="HIPAA-compliant and secure" />
            <BenefitItem text="Available 7 days a week" />
            <BenefitItem text="Accepted by most insurance plans" />
            <BenefitItem text="E-prescriptions sent directly" />
            <BenefitItem text="Medical records in one place" />
          </div>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({ icon, title, description }: any) {
  return (
    <div className="text-center p-6 rounded-lg border bg-white shadow-sm">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
      <span className="text-lg">{text}</span>
    </div>
  )
}
