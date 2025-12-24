
import React from 'react';
import { VideoClip } from '../types';

interface PublishingModalProps {
  clips: VideoClip[];
  onClose: () => void;
}

export const PublishingModal: React.FC<PublishingModalProps> = ({ clips, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in zoom-in-95 duration-200">
      <div className="bg-slate-900 border border-white/10 rounded-[32px] w-full max-w-xl overflow-hidden shadow-2xl">
        <div className="p-8 text-center border-b border-white/5">
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h2 className="text-3xl font-bold mb-2">Clips Processed!</h2>
          <p className="text-slate-400">Your {clips.length} clips have been generated and are ready for distribution.</p>
        </div>
        
        <div className="p-8 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <button className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group">
              <div className="p-3 bg-slate-950 rounded-xl group-hover:bg-indigo-600 transition-colors">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.76.51-1.2 1.43-1.1 2.34.03.99.63 1.92 1.51 2.37.59.3 1.28.4 1.95.33.98-.12 1.86-.71 2.33-1.58.23-.42.33-.89.32-1.37-.02-3.46-.01-6.91-.01-10.36z"/></svg>
              </div>
              <span className="text-sm font-semibold">Post TikTok</span>
            </button>
            <button className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group">
              <div className="p-3 bg-slate-950 rounded-xl group-hover:bg-red-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </div>
              <span className="text-sm font-semibold">Post Shorts</span>
            </button>
            <button className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group">
              <div className="p-3 bg-slate-950 rounded-xl group-hover:bg-pink-600 transition-colors">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324z"/></svg>
              </div>
              <span className="text-sm font-semibold">Post Reels</span>
            </button>
          </div>
          
          <button 
            onClick={onClose}
            className="w-full bg-slate-100 text-slate-900 py-4 rounded-2xl font-bold mt-4"
          >
            Back to Editor
          </button>
        </div>
      </div>
    </div>
  );
};
