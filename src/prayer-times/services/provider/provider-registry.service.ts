import { Injectable } from '@nestjs/common';

// Services
import { AladhanService } from '@/prayer-times/services/aladhan/aladhan.service';

@Injectable()
export class ProviderRegistryService {
  private readonly providers: Map<number, any> = new Map();

  constructor(private aladhanService: AladhanService) {
    // Register providers
    this.providers.set(1, aladhanService);
  }

  getProviderService(providerId: number): any {
    const service = this.providers.get(providerId);
    if (!service) {
      throw new Error(`Unsupported provider ID: ${providerId}`);
    }
    return service;
  }
}
