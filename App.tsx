
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { VideoInput } from './components/VideoInput';
import { ClipEditor } from './components/ClipEditor';
import { PublishingModal } from './components/PublishingModal';
import { VideoMetadata, VideoClip } from './types';

const App: React.FC = () => {
  const [stage, setStage] = useState<'input' | 'editor'>('input');
  const [metadata, setMetadata] = useState<VideoMetadata | null>(null);
  const [exportedClips, setExportedClips] = useState<VideoClip[] | null>(null);

  const handleProcess = (url: string) => {
    // Mocking video processing metadata fetch
    setMetadata({
      url,
      title: "Mastering Creative Workflows with AI",
      duration: 600, // 10 minutes
      thumbnail: `https://picsum.photos/seed/${encodeURIComponent(url)}/1280/720`
    });
    setStage('editor');
  };

  const handleExport = (clips: VideoClip[]) => {
    setExportedClips(clips);
  };

  return (
    <Layout>
      {stage === 'input' && (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <VideoInput onProcess={handleProcess} />
          
          {/* Features Grid */}
          <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl glass-panel group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-12 h-12 bg-indigo-600/20 text-indigo-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Instant Viral Detection</h3>
              <p className="text-slate-500 text-sm">Gemini AI analyzes pacing, tone, and visual cues to find the 1% of content that will go viral.</p>
            </div>
            
            <div className="p-8 rounded-3xl glass-panel group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-12 h-12 bg-cyan-600/20 text-cyan-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Auto-Captions & Framing</h3>
              <p className="text-slate-500 text-sm">Convert landscape to portrait instantly with smart object tracking and high-engagement captions.</p>
            </div>

            <div className="p-8 rounded-3xl glass-panel group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-12 h-12 bg-purple-600/20 text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">One-Click Multi-Publish</h3>
              <p className="text-slate-500 text-sm">Send your clips directly to TikTok, IG Reels, and YT Shorts without leaving the dashboard.</p>
            </div>
          </div>
        </div>
      )}

      {stage === 'editor' && metadata && (
        <ClipEditor 
          metadata={metadata} 
          onExport={handleExport} 
          onBack={() => setStage('input')} 
        />
      )}

      {exportedClips && (
        <PublishingModal 
          clips={exportedClips} 
          onClose={() => setExportedClips(null)} 
        />
      )}
    </Layout>
  );
};

export default App;
