
import React, { useState } from 'react';

interface VideoInputProps {
  onProcess: (url: string) => void;
}

export const VideoInput: React.FC<VideoInputProps> = ({ onProcess }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onProcess(url);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 text-center">
      <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
        Turn Long Videos into Viral Hits
      </h1>
      <p className="text-slate-400 mb-10 text-lg">
        Paste your YouTube, TikTok, or Instagram link and let ClipFlow AI handle the rest.
      </p>
      
      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex items-center bg-slate-900 rounded-2xl p-2 border border-white/10">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your video link here..."
            className="flex-1 bg-transparent px-4 py-3 outline-none text-slate-100 placeholder:text-slate-600"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-500 transition-all shadow-lg active:scale-95"
          >
            Generate Clips
          </button>
        </div>
      </form>
      
      <div className="mt-8 flex justify-center gap-6 text-slate-500 text-sm">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          YouTube
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.76.51-1.2 1.43-1.1 2.34.03.99.63 1.92 1.51 2.37.59.3 1.28.4 1.95.33.98-.12 1.86-.71 2.33-1.58.23-.42.33-.89.32-1.37-.02-3.46-.01-6.91-.01-10.36z"/></svg>
          TikTok
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.149.259-2.912.556-.788.307-1.457.718-2.122 1.383-.665.665-1.076 1.334-1.383 2.122-.297.763-.499 1.635-.556 2.912-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.259 2.149.556 2.912.307.788.718 1.457 1.383 2.122.665.665 1.334 1.076 2.122 1.383.763.297 1.635.499 2.912.556 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.149-.259 2.912-.556.788-.307 1.457-.718 2.122-1.383.665-.665 1.076-1.334 1.383-2.122.297-.763.499-1.635.556-2.912.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.259-2.149-.556-2.912-.307-.788-.718-1.457-1.383-2.122-.665-.665-1.334-1.076-2.122-1.383-.763-.297-1.635-.499-2.912-.556-1.28-.058-1.688-.072-4.947-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          Instagram
        </div>
      </div>
    </div>
  );
};
