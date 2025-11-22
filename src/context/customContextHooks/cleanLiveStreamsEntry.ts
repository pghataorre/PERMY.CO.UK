import { ILiveSession, IContentCollection } from '../../types/contentfulTypes';

const cleanLiveStreamsEntry = (liveStreams: IContentCollection): ILiveSession | undefined => {
	if(!liveStreams) return undefined;

  return {
    liveStreamTitle: liveStreams?.items[0]?.fields?.liveStreamTitle,
    startDateTime: liveStreams?.items[0]?.fields?.startDateTime,
    endDateTime: liveStreams?.items[0]?.fields?.endDateTime,
    streamDescription: liveStreams?.items[0]?.fields?.streamDescription,
    streamLogo: liveStreams?.items[0]?.fields?.streamFlyer?.[0]?.fields?.file?.url,
    scheduledStream: liveStreams?.items[0]?.fields?.scheduledStream,
    defaultStreamingDescription: liveStreams?.items[0]?.fields?.defaultStreamingDescription,
    videoPreloadUrl: liveStreams?.items[0]?.fields?.videoPreloader?.fields?.file?.url,
  }
}

export default cleanLiveStreamsEntry;
