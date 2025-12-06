"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { week: "Week 1", calmness: 30, focus: 40, cortisol: 85 },
  { week: "Week 2", calmness: 45, focus: 50, cortisol: 75 },
  { week: "Week 3", calmness: 55, focus: 65, cortisol: 60 },
  { week: "Week 4", calmness: 70, focus: 75, cortisol: 45 },
  { week: "Week 5", calmness: 80, focus: 82, cortisol: 35 },
  { week: "Week 6", calmness: 88, focus: 88, cortisol: 25 },
  { week: "Week 7", calmness: 92, focus: 94, cortisol: 20 },
  { week: "Week 8", calmness: 95, focus: 96, cortisol: 15 },
]

export function ProgressChart() {
  return (
    <section id="features" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Scientific Results</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Track your journey to inner peace with measurable improvements in just 8 weeks.
          </p>
        </div>

        <Card className="w-full max-w-4xl mx-auto bg-surface/50 backdrop-blur-md border-white/10">
          <CardHeader>
            <CardTitle className="text-accent">Weekly Progress</CardTitle>
            <CardDescription className="text-white/60">
              Average user improvement over 8 weeks of daily practice
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full">
              <ChartContainer
                config={{
                  calmness: {
                    label: "Calmness",
                    color: "#8DC667", // Primary Green
                  },
                  focus: {
                    label: "Focus",
                    color: "#82CFEA", // Secondary Blue
                  },
                  cortisol: {
                    label: "Stress (Cortisol)",
                    color: "#F89E47", // Accent Orange
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                    <XAxis
                      dataKey="week"
                      stroke="rgba(255,255,255,0.5)"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                    />
                    <YAxis
                      stroke="rgba(255,255,255,0.5)"
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="calmness"
                      stroke="var(--color-calmness)"
                      strokeWidth={3}
                      dot={{ r: 4, fill: "var(--color-calmness)" }}
                      activeDot={{ r: 8 }}
                      animationDuration={2000}
                      animationEasing="ease-in-out"
                    />
                    <Line
                      type="monotone"
                      dataKey="focus"
                      stroke="var(--color-focus)"
                      strokeWidth={3}
                      dot={{ r: 4, fill: "var(--color-focus)" }}
                      activeDot={{ r: 8 }}
                      animationDuration={2000}
                      animationEasing="ease-in-out"
                      animationBegin={200}
                    />
                    <Line
                      type="monotone"
                      dataKey="cortisol"
                      stroke="var(--color-cortisol)"
                      strokeWidth={3}
                      dot={{ r: 4, fill: "var(--color-cortisol)" }}
                      activeDot={{ r: 8 }}
                      animationDuration={2000}
                      animationEasing="ease-in-out"
                      animationBegin={400}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
