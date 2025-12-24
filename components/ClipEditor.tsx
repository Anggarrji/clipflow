
import React, { useState, useEffect } from 'react';
import { VideoClip, VideoMetadata, AiClipSuggestion } from '../types';
import { getClipSuggestions } from '../services/geminiService';

interface ClipEditorProps {
  metadata: VideoMetadata;
  onExport: (clips: VideoClip[]) => void;
  onBack: () => void;
}

export const ClipEditor: React.FC<ClipEditorProps> = ({ metadata, onExport, onBack }) => {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<AiClipSuggestion[]>([]);
  const [clips, setClips] = useState<VideoClip[]>([]);
  const [selectedClipId, setSelectedClipId] = useState<string | null>(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      setLoading(true);
      const data = await getClipSuggestions(metadata.title, metadata.duration);
      setSuggestions(data);
      setLoading(false);
    };
    fetchSuggestions();
  }, [metadata]);

  const addClip = (suggestion: AiClipSuggestion) => {
    const id = Math.random().toString(36).substr(2, 9);
    // Parse suggestion times (e.g. "01:23") to seconds
    const parseTime = (timeStr: string) => {
      const [m, s] = timeStr.split(':').map(Number);
      return (m * 60) + s;
    };

    const newClip: VideoClip = {
      id,
      startTime: parseTime(suggestion.start),
      endTime: parseTime(suggestion.end),
      title: suggestion.reason,
      description: suggestion.caption,
      socialPlatforms: ['tiktok', 'youtube'],
      status: 'ready'
    };
    setClips([...clips, newClip]);
  };

  const removeClip = (id: string) => {
    setClips(clips.filter(c => c.id !== id));
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8 h-full animate-in fade-in duration-500">
      {/* Left Column: Preview & Suggestions */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center group">
          <img src={metadata.thumbnail || `https://picsum.photos/seed/${metadata.title}/1280/720`} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" alt="Video preview" />
          <div className="z-10 text-center">
            <button className="w-20 h-20 bg-white text-slate-950 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </button>
            <h2 className="mt-4 font-bold text-xl">{metadata.title}</h2>
          </div>
        </div>

        <div className="bg-slate-900/50 rounded-3xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="text-indigo-400">✨</span> AI Suggested Moments
            </h3>
            {loading && <div className="text-xs text-slate-500 animate-pulse">Analyzing video...</div>}
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {suggestions.map((s, idx) => (
              <div key={idx} className="glass-panel p-4 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group" onClick={() => addClip(s)}>
                <div className="text-xs font-bold text-indigo-400 mb-2">{s.start} - {s.end}</div>
                <div className="text-sm font-semibold mb-2 group-hover:text-white text-slate-200">{s.reason}</div>
                <p className="text-xs text-slate-500 line-clamp-2 mb-3">{s.hook}</p>
                <button className="w-full bg-slate-800 py-2 rounded-lg text-xs font-bold hover:bg-white hover:text-slate-950 transition-colors">
                  Add to Queue
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Active Clips */}
      <div className="bg-slate-900/50 rounded-3xl border border-white/10 flex flex-col">
        <div className="p-6 border-b border-white/5">
          <h3 className="font-bold text-lg">Clip Queue ({clips.length})</h3>
          <p className="text-xs text-slate-500">Ready for export and upload</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {clips.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-40">
              <div className="w-16 h-16 border-2 border-dashed border-slate-700 rounded-full mb-4" />
              <p className="text-sm">No clips added yet. Use AI suggestions or manually mark segments.</p>
            </div>
          ) : (
            clips.map(clip => (
              <div key={clip.id} className="bg-slate-800/50 border border-white/5 rounded-2xl p-4 relative group">
                <button 
                  onClick={() => removeClip(clip.id)}
                  className="absolute top-2 right-2 text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <div className="text-sm font-bold mb-1 truncate pr-6">{clip.title}</div>
                <div className="text-xs text-slate-500 mb-3">{Math.floor(clip.startTime/60)}:{(clip.startTime%60).toString().padStart(2,'0')} - {Math.floor(clip.endTime/60)}:{(clip.endTime%60).toString().padStart(2,'0')}</div>
                
                <div className="flex gap-2">
                  <div className="px-2 py-1 rounded bg-slate-950 text-[10px] border border-white/10 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> TikTok
                  </div>
                  <div className="px-2 py-1 rounded bg-slate-950 text-[10px] border border-white/10 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> IG
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 bg-slate-950/40 rounded-b-3xl space-y-3">
          <button 
            disabled={clips.length === 0}
            onClick={() => onExport(clips)}
            className="w-full bg-white text-slate-950 py-4 rounded-2xl font-bold hover:bg-indigo-50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Export All Clips
          </button>
          <button 
            onClick={onBack}
            className="w-full text-slate-400 text-sm py-2 hover:text-white transition-colors"
          >
            Change Video Source
          </button>
        </div>
      </div>
    </div>
  );
};
