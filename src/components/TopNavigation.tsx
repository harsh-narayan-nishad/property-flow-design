import React, { useState, useEffect } from 'react';
import { ChevronDown, Settings, FileText, BarChart3, Database } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const TopNavigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  // Keyboard shortcuts handler
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'F6') {
        event.preventDefault();
        navigate('/profit-loss-report');
      } else if (event.key === 'F12') {
        event.preventDefault();
        navigate('/final-trial-balance');
      } else if (event.key === 'F9') {
        event.preventDefault();
        navigate('/transaction-report');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleNewParty = () => {
    setActiveDropdown(null);
    navigate('/new-party');
  };

  const handlePartyLedger = () => {
    setActiveDropdown(null);
    navigate('/party-ledger');
  };

  const handleReportNavigation = (path: string) => {
    setActiveDropdown(null);
    navigate(path);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-8">
            <div className="relative">
              <button
                onClick={() => toggleDropdown('configure')}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                <Settings className="w-4 h-4 mr-1" />
                Configure
                <ChevronDown className="w-3 h-3 ml-1" />
              </button>
              {activeDropdown === 'configure' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    <Link
                      to="/user-settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      onClick={() => setActiveDropdown(null)}
                    >
                      User Settings
                    </Link>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                      System Settings
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('create')}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                <FileText className="w-4 h-4 mr-1" />
                Create
                <ChevronDown className="w-3 h-3 ml-1" />
              </button>
              {activeDropdown === 'create' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    <button
                      onClick={handleNewParty}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      New Party
                    </button>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                      New Transaction
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('data')}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                <Database className="w-4 h-4 mr-1" />
                Data Entry
                <ChevronDown className="w-3 h-3 ml-1" />
              </button>
              {activeDropdown === 'data' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    <button
                      onClick={handlePartyLedger}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Party A/C. Ledger
                    </button>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                      Transaction Entry
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                      Batch Entry
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('report')}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                <BarChart3 className="w-4 h-4 mr-1" />
                Report
                <ChevronDown className="w-3 h-3 ml-1" />
              </button>
              {activeDropdown === 'report' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    <button
                      onClick={() => handleReportNavigation('/profit-loss-report')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Profit / Loss Report <span className="text-xs text-gray-500 ml-2">F6</span>
                    </button>
                    <button
                      onClick={() => handleReportNavigation('/final-trial-balance')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Final Trial Balance <span className="text-xs text-gray-500 ml-2">F12</span>
                    </button>
                    <button
                      onClick={() => handleReportNavigation('/transaction-report')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Transaction Report <span className="text-xs text-gray-500 ml-2">F9</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-gray-100 rounded-full p-2 flex items-center space-x-2">
              <button className="p-1 hover:bg-gray-200 rounded">
                <Settings className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <FileText className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <BarChart3 className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
