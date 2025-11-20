import config from "../config/config.mjs";

const mockApiUrl = "https://mock-api.test.com";
const mockApiKey = "mock-api-key";

export const mockConfig = {
	...config,
	apiUrl: mockApiUrl,
	apiKey: mockApiKey
}

export const mockAddMixPostBody = {
	mixId: "123456789",
	mixTitle: "Test Mix Title"
}

export const mockMixCount = {
	mixCount: "20"
}


export const mockEmailSendParams = {
	name: "test name",
	email: "test@example.com",
	message: "This is a test message"
}

export const mockContentEntry = {
    pageTitle: "DJ X-ITE",
    backgroundImagesCollection: [
        {
            metadata: {
                tags: [],
                concepts: []
            },
            sys: {
                space: {
                    sys: {
                        type: "Link",
                        linkType: "Space",
                        id: "amzqzg545ox9"
                    }
                },
                id: "4hYRsebOlLu75bFRxvkOOZ",
                type: "Asset",
                createdAt: "2025-01-02T15:12:02.258Z",
                updatedAt: "2025-01-02T15:35:26.512Z",
                environment: {
                    sys: {
                        id: "master",
                        type: "Link",
                        linkType: "Environment"
                    }
                },
                publishedVersion: 8,
                revision: 2,
                locale: "en-US"
            },
            "fields": {
                "title": "SEATED ON DECKS",
                "description": "",
                "file": {
                    "url": "//images.ctfassets.net/amzqzg545ox9/4hYRsebOlLu75bFRxvkOOZ/0ae3a69070e527ad9884283105213e27/WhatsApp_Image_2025-01-02_at_15.10.56.jpeg",
                    "details": {
                        "size": 117274,
                        "image": {
                            "width": 900,
                            "height": 678
                        }
                    },
                    "fileName": "WhatsApp Image 2025-01-02 at 15.10.56.jpeg",
                    "contentType": "image/jpeg"
                }
            }
        },
        {
            "metadata": {
                "tags": [],
                "concepts": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "amzqzg545ox9"
                    }
                },
                "id": "25cQLT57SmF7j4MlNtp9aT",
                "type": "Asset",
                "createdAt": "2025-01-08T00:09:32.496Z",
                "updatedAt": "2025-01-08T00:09:32.496Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "publishedVersion": 7,
                "revision": 1,
                "locale": "en-US"
            },
            "fields": {
                "title": "XMAS DAYTIMER STAGE SHOT 1 ",
                "description": "",
                "file": {
                    "url": "//images.ctfassets.net/amzqzg545ox9/25cQLT57SmF7j4MlNtp9aT/661036b36a4abb8648f85ca635146549/WhatsApp_Image_2025-01-02_at_21.54.02.jpeg",
                    "details": {
                        "size": 37533,
                        "image": {
                            "width": 848,
                            "height": 480
                        }
                    },
                    "fileName": "WhatsApp Image 2025-01-02 at 21.54.02.jpeg",
                    "contentType": "image/jpeg"
                }
            }
        },
        {
            "metadata": {
                "tags": [],
                "concepts": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "amzqzg545ox9"
                    }
                },
                "id": "2pGdA4zjuoYv7VoB7s0Vdf",
                "type": "Asset",
                "createdAt": "2025-01-08T00:10:12.409Z",
                "updatedAt": "2025-01-08T00:10:12.409Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "publishedVersion": 6,
                "revision": 1,
                "locale": "en-US"
            },
            "fields": {
                "title": "XMAS DAYTIMER - DECKS FRONT SHOT",
                "description": "",
                "file": {
                    "url": "//images.ctfassets.net/amzqzg545ox9/2pGdA4zjuoYv7VoB7s0Vdf/341208ac586c7b7dc32b5b519029e4c3/WhatsApp_Image_2025-01-02_at_21.53.46.jpeg",
                    "details": {
                        "size": 44464,
                        "image": {
                            "width": 848,
                            "height": 480
                        }
                    },
                    "fileName": "WhatsApp Image 2025-01-02 at 21.53.46.jpeg",
                    "contentType": "image/jpeg"
                }
            }
        }
    ],
    description: {
        data: {},
        content: [
            {
                "data": {},
                "content": [
                    {
                        "data": {},
                        "marks": [
                            {
                                "type": "bold"
                            }
                        ],
                        "value": "The Story so far ...",
                        "nodeType": "text"
                    },
                    {
                        "data": {},
                        "marks": [],
                        "value": "\n\nIt's been 30 years if not more. Having played Semi Pro within the 90's Club Circuit and ending playing on the Indian Wedding Arena. I've now officially retired ....... \n\nHold on ..... please carry on reading. \nHas the passion gone?,  NO, Will it ever go?, NO.",
                        "nodeType": "text"
                    }
                ],
                "nodeType": "paragraph"
            },
        ],
        nodeType: "document"
    }
}

export const singularMixItem = {
    mixId: '407145420',
    mixTapeTitle: "Test Mix Tape Title",
    mixUrl: 'https://soundcloud.com/permjit-singh-ghataorre/90s_hip_hop',
    mixTapeImageUrl: '//images/test/testImage.jpg'
}