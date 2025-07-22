import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { Scale, LayoutDashboard, FileText, Briefcase, LogOut, Home } from 'lucide-react'

interface AdminLayoutProps {
  children: React.ReactNode
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/admin')
  }

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Blogs', href: '/admin/blogs', icon: FileText },
    { name: 'Jobs', href: '/admin/jobs', icon: Briefcase },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white">
        <div className="flex items-center space-x-2 p-6 border-b border-slate-800">
          <Scale className="h-8 w-8" />
          <span className="text-xl font-bold font-serif">SOLV Admin</span>
        </div>
        
        <nav className="mt-6">
          <div className="px-3 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname.startsWith(item.href)
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-800 px-3 space-y-1">
            <Link
              to="/"
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors duration-200"
            >
              <Home className="h-5 w-5" />
              <span>View Website</span>
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors duration-200"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="pl-64">
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  )
}