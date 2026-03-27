import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body min-h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Left Column: Visual/Atmosphere */}
        <div className="hidden md:flex md:w-5/12 lg:w-1/2 relative bg-surface-container-low p-24 items-center justify-center">
        {/* Content Pillar Decoration */}
        <div className="absolute left-16 top-0 bottom-0 w-[2px] bg-primary-fixed"></div>
        <div className="z-10 max-w-md">
        <div className="mb-12">
        <span className="font-serif font-bold text-3xl tracking-tighter text-on-surface uppercase">MONOLITH</span>
        </div>
        <h2 className="font-headline text-5xl lg:text-7xl leading-tight text-on-surface mb-8 tracking-tight">
                            Architecture of <br/><span className="italic text-primary">Wealth.</span>
        </h2>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-sm">
                            A curated financial sanctuary designed for the modern executor. Precision tools meets timeless aesthetics.
                        </p>
        <div className="mt-16 grid grid-cols-2 gap-4">
        <div className="h-[200px] bg-surface-container overflow-hidden rounded">
        <img className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700" alt="Minimalist concrete architectural detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWsHw5gl1N0mfXRNfkmXxPpKEa5HlL_tO0zZvUNi3nHK8yuTsAGmvmz6pRYKyR0nvSTENotl-3EnRL3Z9d-wcuaCDtQeP7pqexblqCVx2If4il4oBycc1vH_DYTMT1rCkyqEIdujsQGAGmv5jdJ1A0kNuAlxk48I30XGWc3DV3Ggo0hR2YNEEnCG5ztue3m39srIDExn5FIOf6pv03HOvkxQ2yQ0NpAryv5QfxDznIpAOKNaDo19OeYQHUst0y20FC3Tf6puoh2C-X"/>
        </div>
        <div className="h-[200px] bg-surface-container-high mt-12 overflow-hidden rounded">
        <img className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700" alt="Glass and steel modern structure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdcCfiv0zhO-s0mMcUG3f_1z2nWKR236-OIJzV3fl5iqlVFnPyKN8x6W4NwHuvGfSPy0mSM0SSx0dhma5Qs7jGc06wFPEHAA-3kpErscs8fo2opBPneU8Xhi-TC7CyHzuFxP5_-fFYGqfDZT7mcOsENJzaPDh04hwvVkEh7xvhqcEnAr6tB3vFrhSEf3y95mg8z-ocLngX1P3hGF7no0aTbDdCp-8LQGk_iSb8REeJm7W8PEPXQ71NYpPgZpvWmNsPNzg7oLswwgFS"/>
        </div>
        </div>
        </div>
        {/* Absolute decorative circle */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full border border-primary/5"></div>
        </div>

        {/* Right Column: Registration Form */}
        <main className="flex-1 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-32 bg-surface-container-lowest">
        <div className="max-w-md w-full mx-auto">
        {/* Mobile Header */}
        <div className="md:hidden mb-12">
        <span className="font-serif font-bold text-2xl tracking-tighter text-on-surface">MONOLITH</span>
        </div>
        <div className="mb-12">
        <h1 className="font-headline text-4xl lg:text-5xl text-on-surface tracking-tight mb-4">Join the Inner Circle</h1>
        <p className="text-on-surface-variant font-medium tracking-normal">Define your financial future with absolute clarity.</p>
        </div>

        {/* Registration Form */}
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/profile-setup'); }}>
        {/* Full Name */}
        <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold px-1">Full Name</label>
        <div className="relative group">
        <input className="w-full bg-surface-container-high border-none py-4 px-4 focus:ring-0 rounded-sm text-on-surface placeholder:text-outline/50 transition-all border-b-2 border-transparent focus:border-primary" placeholder="Julian Thorne" type="text"/>
        </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold px-1">Email Address</label>
        <div className="relative group">
        <input className="w-full bg-surface-container-high border-none py-4 px-4 focus:ring-0 rounded-sm text-on-surface placeholder:text-outline/50 transition-all border-b-2 border-transparent focus:border-primary" placeholder="julian@monolith.com" type="email"/>
        </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold px-1">Secure Password</label>
        <div className="relative group">
        <input className="w-full bg-surface-container-high border-none py-4 px-4 focus:ring-0 rounded-sm text-on-surface placeholder:text-outline/50 transition-all border-b-2 border-transparent focus:border-primary" placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢" type="password"/>
        </div>
        </div>

        {/* CTA */}
        <div className="pt-4">
        <button type="submit" className="w-full bg-forest-gradient text-on-primary py-5 rounded-sm font-bold tracking-widest text-xs uppercase shadow-lg shadow-primary/10 hover:opacity-90 transition-all active:scale-[0.98]">
                                    Create Account
                                </button>
        </div>

        <div className="text-center">
        <p className="text-sm text-on-surface-variant">
                                    Already have an account? 
                                    <span className="text-primary font-bold hover:underline underline-offset-4 ml-1 cursor-pointer">Sign In</span>
        </p>
        </div>
        </form>

        {/* Divider */}
        <div className="relative my-12">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-outline-variant/30"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase tracking-[0.3em]">
        <span className="bg-surface-container-lowest px-4 text-on-surface-variant">Or continue with</span>
        </div>
        </div>

        {/* Social Logins */}
        <div className="grid grid-cols-2 gap-4">
        {/* Google Button */}
        <button className="flex items-center justify-center gap-3 bg-surface-container-high py-4 px-6 rounded-full hover:bg-surface-container transition-colors group">
        <span className="material-symbols-outlined text-on-surface">account_circle</span>
        <span className="text-xs font-bold uppercase tracking-widest text-on-surface">Google</span>
        </button>
        {/* Apple Button */}
        <button className="flex items-center justify-center gap-3 bg-surface-container-high py-4 px-6 rounded-full hover:bg-surface-container transition-colors group">
        <span className="material-symbols-outlined text-on-surface">ios</span>
        <span className="text-xs font-bold uppercase tracking-widest text-on-surface">Apple</span>
        </button>
        </div>

        {/* Footer Legal */}
        <div className="mt-16 text-center">
        <p className="text-[10px] text-outline uppercase tracking-widest leading-relaxed">
                                By registering, you agree to our <br/>
        <span className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">Terms of Service</span> &amp; <span className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
        </p>
        </div>
        </div>
        </main>
    </div>
  );
}
