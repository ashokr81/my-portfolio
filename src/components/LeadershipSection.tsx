import React from 'react';
import { Users, GitPullRequest, ShieldCheck, Rocket, CheckCircle2 } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  const leadershipPillars = [
    {
      title: '6-Person Cross-Functional Command',
      icon: Users,
      metric: '6 Engineers',
      description:
        'Leading frontend, mobile, and backend engineers at Fugen Webtech. Orchestrating sprint commitments, resolving architectural blockers, and conducting regular technical retrospectives.',
      points: [
        'Bridging mobile (Flutter) and backend (Node.js/Express) API contracts prior to feature implementation.',
        'Weekly architectural alignment preventing divergence across parallel client codebases.',
      ],
    },
    {
      title: 'Standardized Architecture Blueprints',
      icon: ShieldCheck,
      metric: 'Zero Tech Debt Sprawl',
      description:
        'Instituted strict Clean Architecture and MVVM patterns across all active repositories, establishing predictable directory structures and separation of concerns.',
      points: [
        'Enforced repository patterns with unified error handling and domain models.',
        'Standardized mockable data interfaces for continuous unit and integration testing.',
      ],
    },
    {
      title: 'Uniform Code Review Quality Gates',
      icon: GitPullRequest,
      metric: 'High Code Quality',
      description:
        'Transformed code review from a rubber-stamp into an educational quality gate. Reviews focus on memory leaks, defensive queries, and boundary validation.',
      points: [
        'Checklist covering frame-budget impacts, memory leaks, and defensive SQL indexing.',
        'Pair programming on critical production paths like real-time streaming and payment webhooks.',
      ],
    },
    {
      title: 'Automated Staging Deployment Workflows',
      icon: Rocket,
      metric: '15% Faster Cycles',
      description:
        'Automated multi-branch staging workflows via GitHub Actions and GitLab CI, ensuring every pull request builds and validates against production-parity staging servers.',
      points: [
        'Eliminated manual deployment bottlenecks and configuration drift between developers.',
        'Directly improved production delivery loops by 15% across mobile and web platforms.',
      ],
    },
  ];

  return (
    <section id="leadership" className="py-20 bg-[#07090e] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/40 text-xs font-mono-code text-indigo-300 mb-3">
            <Users className="w-3.5 h-3.5" />
            ENGINEERING LEADERSHIP & GOVERNANCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Lead Teams & Drive Delivery
          </h2>
          <p className="text-base text-slate-400 mt-2">
            Leadership in software engineering is about establishing uncompromising standards, unblocking engineers, and creating predictable, high-velocity delivery pipelines.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#0b0e17] border border-white/10 hover:border-cyan-500/30 transition-all duration-200 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono-code text-xs px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-cyan-300 font-semibold">
                      {pillar.metric}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-2">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
