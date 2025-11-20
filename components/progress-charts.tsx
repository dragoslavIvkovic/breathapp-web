"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { motion } from "framer-motion"

const data = [
  { week: "Week 1", calmness: 30, focus: 40, cortisol: 80 },
  { week: "Week 2", calmness: 45, focus: 50, cortisol: 70 },
  { week: "Week 3", calmness: 60, focus: 65, cortisol: 55 },
  { week: "Week 4", calmness: 75, focus: 70, cortisol: 45 },
  { week: "Week 5", calmness: 85, focus: 80, cortisol: 35 },
  { week: "Week 6", calmness: 90, focus: 85, cortisol: 25 },
  { week: "Week 7", calmness: 92, focus: 90, cortisol: 20 },
  { week: "Week 8", calmness: 95, focus: 95, cortisol: 15 },
]

export function ProgressCharts() {
  return (
    <section className="py-24 bg-surface/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Scientifically Proven Results</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Track your journey to a healthier mind and body. Our users report significant improvements in just 8 weeks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calmness & Focus Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Mental Clarity</h3>
              <p className="text-white/60 text-sm">Increase in Calmness & Focus levels</p>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorCalmness" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#60A5FA" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorFocus" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#34D399" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#34D399" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis 
                    dataKey="week" 
                    stroke="rgba(255,255,255,0.5)" 
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.5)" 
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1F2937', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="calmness"
                    stroke="#60A5FA"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorCalmness)"
                    name="Calmness"
                  />
                  <Area
                    type="monotone"
                    dataKey="focus"
                    stroke="#34D399"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorFocus)"
                    name="Focus"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Cortisol Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Stress Reduction</h3>
              <p className="text-white/60 text-sm">Decrease in Cortisol (Stress Hormone) levels</p>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorCortisol" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F87171" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#F87171" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis 
                    dataKey="week" 
                    stroke="rgba(255,255,255,0.5)" 
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.5)" 
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1F2937', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="cortisol"
                    stroke="#F87171"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorCortisol)"
                    name="Cortisol Level"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
