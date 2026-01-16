import http, { type Response } from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';
export const options = {
    stages: [
        { duration: '30s', target: 10 },
        { duration: '30s', target: 200 },
        { duration: '1m', target: 200 },
        { duration: '30s', target: 10 },
        { duration: '30s', target: 10 },
    ],
    thresholds: {
        'http_req_duration': ['p(95)<3000'],
        'http_req_failed': ['rate<0.01'],
    },
};
export default function (): void {
    const res: Response = http.get('https://linear.app/login');
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
    sleep(1);
}
