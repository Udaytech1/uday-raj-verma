import React from 'react';

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function TechIcon({ name, size = 16, className = '', style = {} }: TechIconProps) {
  const normalized = name.toLowerCase().trim().replace(/[^a-z0-9]/g, '');

  const iconStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: size,
    height: size,
    ...style,
  };

  // Helper renderers for accurate icons
  switch (normalized) {
    // --- Mobile & Core Languages ---
    case 'reactnative':
    case 'react':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
            <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
            <g stroke="#00D8FF" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        </span>
      );

    case 'android':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="#3DDC84">
            <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9996.4482.9996.9993.0001.5511-.4486.9997-.9996.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9997.4482.9997.9993 0 .5511-.4486.9997-.9997.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 7.6433 13.8532 7.15 12 7.15s-3.5902.4933-5.1368 1.8097L4.8409 5.4567a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.2867.5401 14.9392.5401 19.1417h22.9198c0-4.2025-2.1488-7.855-5.5784-9.8203z"/>
          </svg>
        </span>
      );

    case 'kotlin':
    case 'kotlincoroutines':
    case 'coroutines':
    case 'flow':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24">
            <defs>
              <linearGradient id="ktGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C757BC" />
                <stop offset="50%" stopColor="#D06090" />
                <stop offset="100%" stopColor="#E26D5C" />
              </linearGradient>
            </defs>
            <path fill="url(#ktGrad)" d="M24 24H0V0h24L12 12z" />
          </svg>
        </span>
      );

    case 'java':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M7.4 17.6c1.8.3 3.8.3 5.3-.1 1.6-.4 2.8-1.2 2.8-1.2s-.9.6-2.5.9c-2 .4-4.5.3-5.6.4zm-1.8 2.2c2.4.4 5.3.4 7.6-.1 2.3-.5 4.3-1.6 4.3-1.6s-1.4.8-3.8 1.2c-2.8.5-6.5.4-8.1.5zm11.7-5.1c.3.5.3 1.2-.1 1.7-1 1.4-3.5 2.1-6.1 2.3-2.9.2-5.4-.3-6.6-.9-.5-.2-.7-.5-.6-.8.2-.4.8-.7 1.5-.7.7 0 1.2.2 2 .4 1.8.4 3.7.3 5.4-.3 1.6-.6 3.1-1.3 4.5-1.7zm-2.7-3.9c.7 1-1.3 2.1-3 2.3-1.3.1-2.4-.2-3.6-.4-1.1-.2-1.9-.1-1.9-.1s.7-.4 1.7-.5c1.4-.2 2.8.1 4.2-.1 1.2-.2 2.1-.6 2.6-1.2zm3.3-2.6c-1.3.6-2.8.7-4.2.8-1.5 0-3.1-.2-4.5-.4-1.2-.2-1.8 0-1.8 0s.8-.5 2-.6c1.6-.2 3.3.1 4.9 0 1.4-.1 2.7-.4 3.6.2z" fill="#E76F00" />
            <path d="M12.6 1.8c.8 1.1.5 2.1-.2 3.1-.7 1-1.8 2-1.5 3.3.2.7.7 1.2 1.3 1.6.4.3.4.6.1.8-.4.2-.8.1-1.2-.2-.8-.7-1.3-1.6-1.3-2.6-.1-1.6 1-2.9 1.8-4.2.4-.6.7-1.2.7-1.8z" fill="#5382A1" />
          </svg>
        </span>
      );

    case 'typescript':
    case 'ts':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="#3178C6">
            <rect width="24" height="24" rx="4" fill="#3178C6" />
            <path d="M11.7 13.9h-2.1V20H8v-6.1H5.9V12h5.8v1.9zm4.2 3.8c.6.4 1.4.6 2.1.6.8 0 1.3-.3 1.3-.8 0-.6-.6-.7-1.6-1-1.7-.5-2.7-1.1-2.7-2.6 0-1.6 1.3-2.6 3.2-2.6 1.1 0 2 .3 2.6.7l-.6 1.6c-.6-.4-1.2-.6-1.9-.6-.8 0-1.2.3-1.2.7 0 .5.5.7 1.6 1 1.7.5 2.8 1.1 2.8 2.6 0 1.7-1.3 2.7-3.4 2.7-1.3 0-2.3-.3-3.1-.9l.9-1.4z" fill="#FFF" />
          </svg>
        </span>
      );

    case 'javascript':
    case 'js':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24">
            <rect width="24" height="24" rx="4" fill="#F7DF1E" />
            <path d="M6.5 18.5l1.6-.9c.4.7.7 1.2 1.5 1.2.8 0 1.3-.3 1.3-1.5V11h2v6.3c0 2.2-1.3 3.2-3.2 3.2-1.7 0-2.7-.9-3.2-2zm8.8-.2l1.6-.9c.5.8 1.1 1.3 2.1 1.3 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.2-1.8-1.7l-.6-.2c-1.8-.8-3-1.7-3-3.6 0-1.8 1.4-3.2 3.5-3.2 1.6 0 2.7.6 3.4 1.8l-1.5 1c-.4-.6-.8-.9-1.8-.9-.9 0-1.4.5-1.4 1.1 0 .7.5 1 1.6 1.5l.6.2c2.1.9 3.2 1.8 3.2 3.8 0 2.2-1.7 3.3-3.7 3.3-2.1 0-3.3-1.1-3.8-2.4z" fill="#000" />
          </svg>
        </span>
      );

    case 'jetpackcompose':
    case 'compose':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#4285F4" opacity="0.2" />
            <path d="M12 2L3 7l9 5 9-5-9-5z" fill="#4285F4" />
            <path d="M3 17l9 5V12L3 7v10z" fill="#34A853" />
            <path d="M21 17l-9 5V12l9-5v10z" fill="#00C853" />
            <path d="M12 8.5L6.5 11.5l5.5 3 5.5-3L12 8.5z" fill="#FFFFFF" />
          </svg>
        </span>
      );

    case 'unity':
    case 'vr':
    case '360videoplayer':
    case 'vrdevelopment':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.2l4.8 2.8-1.5 2.6L12 5.6 8.7 7.6 7.2 4.9 12 2.2zm-7.6 5l1.6 2.6 3.3-1.9v3.8H6.1v3.2h3.2v3.8l-3.3-1.9-1.6 2.6-2.4-4.1v-4l2.4-4.1zm15.2 0l2.4 4.1v4l-2.4 4.1-1.6-2.6-3.3 1.9v-3.8h3.2v-3.2h-3.2V8.3l3.3 1.9 1.6-2.6zM12 11.2l2.6 1.5L12 14.2l-2.6-1.5 2.6-1.5zm0 7.2l3.3-2 1.5 2.6-4.8 2.8-4.8-2.8 1.5-2.6 3.3 2z" />
          </svg>
        </span>
      );

    // --- Backend, Cloud & Integrations ---
    case 'firebase':
    case 'firebaseservices':
    case 'fcm':
    case 'pushnotifications':
    case 'pushnotificationsfcm':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M4.6 16.7l2.2-13.8c.1-.4.5-.6.8-.4l3.1 5.9-6.1 8.3z" fill="#FFA000" />
            <path d="M12.9 8.7L15 4.8c.2-.4.8-.4 1 0l3.4 11.9-6.5-8z" fill="#F57C00" />
            <path d="M4.6 16.7l.2-.3 7.8-10.7c.3-.4.8-.4 1.1 0l5.7 11-14.8 0z" fill="#FFCA28" />
            <path d="M12 22.5c-4.2 0-7.8-2.6-9.3-6.4l1.9-1.2L12 22.5z" fill="#F57C00" opacity="0.3" />
            <path d="M12 22.5l7.4-7.6 1.9 1.2c-1.5 3.8-5.1 6.4-9.3 6.4z" fill="#FFA000" opacity="0.4" />
          </svg>
        </span>
      );

    case 'websockets':
    case 'websocket':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#00C49F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </span>
      );

    case 'restapis':
    case 'restapi':
    case 'apis':
    case 'json':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </span>
      );

    case 'redux':
    case 'reactredux':
    case 'reduxtoolkit':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="#764ABC">
            <path d="M15.7 10.3c.4-.7.6-1.5.6-2.3 0-2.8-2.2-5-5-5-1.5 0-2.8.6-3.8 1.6l1.4 1.4c.6-.6 1.4-1 2.4-1 1.7 0 3 1.3 3 3 0 .5-.1 1-.4 1.4l1.8.9zm-7.4 3.4c-.4.7-.6 1.5-.6 2.3 0 2.8 2.2 5 5 5 1.5 0 2.8-.6 3.8-1.6l-1.4-1.4c-.6.6-1.4 1-2.4 1-1.7 0-3-1.3-3-3 0-.5.1-1 .4-1.4l-1.8-.9zM5.3 8.3C4.5 9.4 4 10.6 4 12c0 1.4.5 2.6 1.3 3.7l1.4-1.4C6.2 13.5 6 12.8 6 12s.2-1.5.7-2.3L5.3 8.3zm13.4 7.4c.8-1.1 1.3-2.3 1.3-3.7 0-1.4-.5-2.6-1.3-3.7l-1.4 1.4c.5.8.7 1.5.7 2.3s-.2 1.5-.7 2.3l1.4 1.4z" />
          </svg>
        </span>
      );

    case 'aigptstreaming':
    case 'aiapis':
    case 'aiplatform':
    case 'gptstreaming':
    case 'openai':
    case 'aiconversationalproducts':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            <circle cx="12" cy="12" r="4" fill="#8B5CF6" fillOpacity="0.2" />
          </svg>
        </span>
      );

    case 'videocalling':
    case 'webrtc':
    case 'videocallingwebrtc':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
          </svg>
        </span>
      );

    case 'intercom':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="#0052FF">
            <path d="M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-3l-4 4-4-4H6a3 3 0 0 1-3-3V5zm5 4v4h2V9H8zm3-1v6h2V8h-2zm3 1v4h2V9h-2z" />
          </svg>
        </span>
      );

    case 'testfairy':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="#14B8A6">
            <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.2L12 8.5l-2.5 1.3L12 11zm0 4.5l-8-4v6l8 4 8-4v-6l-8 4z" />
          </svg>
        </span>
      );

    case 'nodejs':
    case 'node':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="#5FA04E">
            <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4z" />
          </svg>
        </span>
      );

    // --- Android Core & Architecture ---
    case 'roomdb':
    case 'room':
    case 'sqlite':
    case 'sqlitedb':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </span>
      );

    case 'hilt':
    case 'hiltinjection':
    case 'dagger':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M12 8v8m-4-4h8" />
          </svg>
        </span>
      );

    case 'mvvm':
    case 'mvc':
    case 'cleanarchitecture':
    case 'androidarchitecture':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        </span>
      );

    case 'workmanager':
    case 'backgroundsync':
    case 'backgroundsyncing':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </span>
      );

    case 'livedata':
    case 'navigationcomponent':
    case 'databinding':
    case 'asyncstorage':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </span>
      );

    // --- Dev Tools & Deployment ---
    case 'googleplaystore':
    case 'googleplay':
    case 'googleplayconsole':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24">
            <path d="M3.6 2.3A1.8 1.8 0 0 0 3 3.6v16.8a1.8 1.8 0 0 0 .6 1.3l.1.1 9.4-9.4v-.2L3.7 2.2l-.1.1z" fill="#00D2FF" />
            <path d="M16.2 15.3l-3.1-3.1v-.4l3.1-3.1.1.1 3.7 2.1c1 .6 1 1.6 0 2.2l-3.8 2.2z" fill="#FFD200" />
            <path d="M13.1 12.2L3.6 21.7c.4.4 1 .4 1.7 0l10.9-6.3-3.1-3.2z" fill="#FF3333" />
            <path d="M13.1 11.8l3.1-3.1L5.3 2.4C4.6 2 4 2 3.6 2.4l9.5 9.4z" fill="#00E676" />
          </svg>
        </span>
      );

    case 'appleappstore':
    case 'appstore':
    case 'ios':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="#0071E3">
            <rect width="24" height="24" rx="5" fill="#0071E3" />
            <path d="M11 6h2v6.5h-2V6zm-4.5 8.5L9 11l4.5 7h-2.3L10 16.1l-1.2 1.9H6.5zm11 0l-2.5-3.5 1.2-1.9 3.3 5.4h-2z" fill="#FFF" />
          </svg>
        </span>
      );

    case 'huaweiappgallery':
    case 'huawei':
    case 'huaweistore':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="#C7000B">
            <rect width="24" height="24" rx="5" fill="#C7000B" />
            <path d="M6 8h12v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8zm3-3a3 3 0 0 1 6 0h-2a1 1 0 1 0-2 0H9z" fill="#FFF" />
          </svg>
        </span>
      );

    case 'androidstudio':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#3DDC84" />
            <path d="M12 6l5 10H7l5-10z" fill="#FFF" />
            <circle cx="12" cy="13" r="2" fill="#2E7D32" />
          </svg>
        </span>
      );

    case 'xcode':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="#147EFB">
            <rect width="24" height="24" rx="5" fill="#147EFB" />
            <path d="M7 16l3-6 4 4-2 3-5-1zm8-8l2 2-7 7-2-2 7-7z" fill="#FFF" />
          </svg>
        </span>
      );

    case 'git':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="#F05032">
            <path d="M23.6 11.2L12.8.4a1.6 1.6 0 0 0-2.3 0L8.2 2.7l3 3a1.9 1.9 0 0 1 2.4 2.4l2.9 2.9a1.9 1.9 0 0 1 1.8 3.1 1.9 1.9 0 0 1-2.7-.2l-2.7-2.7v5.2a1.9 1.9 0 1 1-1.6 0V11a1.9 1.9 0 0 1-1-2.5L7.4 5.6.4 12.6a1.6 1.6 0 0 0 0 2.3l10.8 10.8a1.6 1.6 0 0 0 2.3 0l10.1-10.1a1.6 1.6 0 0 0 0-2.4z"/>
          </svg>
        </span>
      );

    case 'github':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        </span>
      );

    case 'postman':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="#FF6C37">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 5l4 4-7 7-3-3 6-8z" fill="#FFF" />
          </svg>
        </span>
      );

    case 'vscode':
    case 'visualstudiocode':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="#007ACC">
            <path d="M17.6 2.2l4.8 2.4c.4.2.6.6.6 1v12.8c0 .4-.2.8-.6 1l-4.8 2.4a1 1 0 0 1-1.2-.2L9.2 15 4.6 18.5a.8.8 0 0 1-1.1-.1L1.2 16a.8.8 0 0 1 .1-1.1l3.5-3-3.5-2.9a.8.8 0 0 1-.1-1.1l2.3-2.4a.8.8 0 0 1 1.1-.1L9.2 9l7.2-6.6a1 1 0 0 1 1.2-.2zM17 7.5L10.8 12 17 16.5V7.5z" />
          </svg>
        </span>
      );

    // --- Quality, Performance & Testing ---
    case 'unittesting':
    case 'testing':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
        </span>
      );

    case 'performanceprofiling':
    case 'performanceoptimisation':
    case 'performanceoptimization':
    case 'performance':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </span>
      );

    case 'memoryoptimisation':
    case 'memoryoptimization':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <line x1="9" y1="1" x2="9" y2="4" />
            <line x1="15" y1="1" x2="15" y2="4" />
            <line x1="9" y1="20" x2="9" y2="23" />
            <line x1="15" y1="20" x2="15" y2="23" />
            <line x1="20" y1="9" x2="23" y2="9" />
            <line x1="20" y1="14" x2="23" y2="14" />
            <line x1="1" y1="9" x2="4" y2="9" />
            <line x1="1" y1="14" x2="4" y2="14" />
          </svg>
        </span>
      );

    case 'crashanalytics':
    case 'crashlytics':
    case 'debugging':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="8" height="14" x="8" y="6" rx="4" />
            <path d="m19 7-3 2" />
            <path d="m5 7 3 2" />
            <path d="m19 19-3-2" />
            <path d="m5 19 3-2" />
            <path d="M20 13h-4" />
            <path d="M4 13h4" />
            <path d="m10 4 1-2" />
            <path d="m14 4-1-2" />
          </svg>
        </span>
      );

    case 'cicd':
    case 'codereviews':
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </span>
      );

    default:
      // Default crisp generic tech icon
      return (
        <span style={iconStyle} className={className} title={name}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </span>
      );
  }
}
